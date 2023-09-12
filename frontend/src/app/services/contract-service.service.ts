import { Injectable, effect } from '@angular/core';
import { ethers } from 'ethers';
import { MetamaskService } from '../services/metamask.service';
import { AlchemyService } from '../services/alchemy.service';
import donationPlatform from "../../assets/contracts/DonationPlatformContract.json";
import donationContract from "../../assets/contracts/DonationContract.json"

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {

  provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  signer = this.provider.getSigner();
  currentChainId = this.metamaskService.currentChainId;
  currentAccount = this.metamaskService.currentAccount;
  balance = this.metamaskService.balance;
  hasRole: boolean = false;

  platformContract = new ethers.Contract("0xc7005540F6288bc97E85dE5BF7b8cAab79B9A9F9", donationPlatform.abi, this.signer);
  proposalContract = new ethers.Contract("", donationContract.abi, this.signer);

  constructor (
    private metamaskService: MetamaskService,
    private alchemyService: AlchemyService) {

      effect(async () => {
        const campaignCreator =  await this.platformContract.CAMPAIGN_CREATOR()
        this.hasRole = await this.platformContract.hasRole(campaignCreator, this.signer._address);
      });
  }

  async donate(proposalAddress: string, amount: bigint): Promise<string> {
    try {
      const contract = this.proposalContract.attach(proposalAddress);
      const tx = await contract.donate({value: amount.toString()});
      await tx.wait();
      console.log("Transaction hash:", tx.hash);
      return tx.hash;
    } 
    catch (error) {
      console.error("Error:", error);
      return "Error. Inssuficient Funds or Excceded amout Requested "
    }
  }

  async closeCampaign(proposalAddress: string): Promise<string> {
    try {
      const contract = this.proposalContract.attach(proposalAddress);
      const tx = await contract.closeCampaign();
      return "Closed Campaign Successfully"
    } 
    catch (error) {
      console.error("Error:", error);
      return "Cant be closed yet";
    }
  }


  async getCampaignOpen(proposalAddress: string): Promise<boolean | string> {
    try {
      return await this.proposalContract.attach(proposalAddress).campaignOpen();
    }
    catch {
        return "Error. Probaly invalid address"
    }
  }

  async getMissingBalance(proposalAddress: string): Promise<number | string> {
    try {
      const missingBalance = await this.proposalContract.attach(proposalAddress).missingBalanceToTarget();
      return missingBalance.toNumber();
    }
    catch {
        return "Error. Probaly invalid address"
    }
  }

}
