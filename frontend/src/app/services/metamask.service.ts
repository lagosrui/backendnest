import { Injectable, signal } from '@angular/core';
import { ethers } from 'ethers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MetamaskService {
  currentChainId = signal('');
  currentAccount = signal('');
  balance = signal('');
  provider: ethers.providers.Web3Provider | undefined;
  signer: ethers.Signer | undefined;

  checkMetamaskAvailability() {
    try {
      return !!window.ethereum;
    } catch (err) {
      return false;
    }
  }

  connectWallet() {
    window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then(() => {
        this.handleAccountsChanged();
        this.handleChainChanged();
        this.getBalance();
      });
  }

  async retrieveConnection() {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length) {
      this.handleAccountsChanged();
      this.handleChainChanged();
      this.getBalance();
    }
  }

  handleChainChanged(): void {
    console.log({ log: window.ethereum });
    this.currentChainId.set(window.ethereum.chainId);
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });
  }

  handleAccountsChanged() {
    this.currentAccount.set(window.ethereum.selectedAddress);
    this.provider = this.getProvider();
    this.signer = this.provider.getSigner();
    window.ethereum.on('accountsChanged', () => {
      window.location.reload();
    });
  }

  async getBalance() {
    if (!this.provider) throw new Error('Provider not configured!');
    const balance = await this.provider.getBalance(this.currentAccount());
    this.balance.set(ethers.utils.formatEther(balance));
  }

  getProvider() {
    return new ethers.providers.Web3Provider(window.ethereum);
  }

  private baseUrl = 'http://localhost:3000';  // Change to your NestJS server's address

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  async checkWalletInDB(walletAddress: string) {
    try {
      await this.http.get(`${this.baseUrl}/users/${walletAddress}`).toPromise();
      return true;  // If the request succeeds, the wallet exists in the DB
    } catch (error) {
      return false; // If the request fails, the wallet does not exist in the DB
    }
  }

  async createProfileForWallet(walletAddress: string) {
    return this.http.post(`${this.baseUrl}/users`, { address: walletAddress }).toPromise();
  }
}
