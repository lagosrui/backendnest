import { ContractServiceService } from './services/contract-service.service';
import { MetamaskService } from './services/metamask.service';
import { AlchemyService } from './services/alchemy.service';
import { Component, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenBalance } from 'alchemy-sdk';
import { ethers } from 'ethers';
import { ApiService } from './services/api.service';


declare global {
  interface Window {
    ethereum: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Donations Dapp';
  provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  signer = this.provider.getSigner();
  currentChainId = this.metamaskService.currentChainId;
  currentAccount = this.metamaskService.currentAccount;
  balance = this.metamaskService.balance;
  tokenBalances: TokenBalance[] = [];
  user: any;
  hasMetamask;
  hasKyc: boolean = false;
  

  private apiUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private metamaskService: MetamaskService,
    private alchemyService: AlchemyService,
    private contractService: ContractServiceService,
    private apiService: ApiService
  ) {
    this.hasMetamask = metamaskService.checkMetamaskAvailability();
    if (this.hasMetamask) {
      metamaskService.retrieveConnection();
    }
    effect(async () => {
      if (this.currentAccount()) {
        this.tokenBalances = await this.alchemyService.getTokenBalances(
          this.currentAccount()
        );
      }
    });


  }

  ngOnInit() {
  }

  connectWallet() {
     this.metamaskService.connectWallet();
  }

  getUser() {
    return this.http.get<any>(`${this.apiUrl}/users/${this.currentAccount}`);
  }


}
