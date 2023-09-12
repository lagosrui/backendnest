import { Component, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ContractServiceService } from '../services/contract-service.service';
import donationContract from "../../assets/contracts/DonationContract.json"
import { ethers } from 'ethers';



@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.css']
})
export class ProposalDetailsComponent {

  proposal?: any;
  contractAddress: any;
  contractOpen: any = false; // campaign closed in contract
  readyToClose: any = false;  // campaign ready to close 

  // variables to check when to close 
  missingBalance: any = 0;
  countdown: string = ""; // campaign ended  
  countdownSeconds: number = 0;
  countdownEvent: any;

  // others
  raisedPercentage = 0;
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private contract: ContractServiceService) {
  }

  async ngOnInit() {
    this.contractAddress = this.route.snapshot.paramMap.get('address') ?? "";
    this.getProposalDetail(this.contractAddress);
    this.updateCountdown();
    this.countdownEvent = setInterval(() => this.updateCountdown(), 1000);
    this.updateStatus();
}
  getProposalDetail(address:string): void {
    this.apiService.getProposalDetail(address).subscribe({
      next: (response) => {
        this.proposal = response[0];
      },
      error: (error) =>  {
        console.error('Error fetching ended proposals:', error);
      }
    });
  }

  // Only visible if campaign is open
  async donate(amount: string) {
    const amountNumber = BigInt(Number(amount));
    this.updateStatus();
    if (this.missingBalance == 0) {
      return "Sorry, someone has donated, and the campaign reached its limit!";
    }
    if (this.missingBalance < amountNumber) {
      return "Sorry, someone has donated, and your donation amount exceeds the limit!";
    }
    return this.contract.donate(this.contractAddress, amountNumber);
  }

  // Triggered when button clicked
  // Button enabled if countdown == 0 or this.missingBalance == 0
  async closeCampaign() {return this.contract.closeCampaign(this.contractAddress);}


  // Updates variables and returns true if donation can proceed
  async updateStatus(): Promise<void> {
    this.missingBalance = await this.contract.getMissingBalance(this.contractAddress);
    // if (typeof this.missingBalance == 'string') {return 'Error'} // assert 

    this.raisedPercentage = Math.round(
      (this.proposal.amountRequested - this.missingBalance) 
      / this.proposal.amountRequested * 100);

    this.contractOpen = await this.contract.getCampaignOpen(this.contractAddress);
    if (this.contractOpen){
      this.readyToClose = this.missingBalance == 0 || this.countdownSeconds <= 0;
    }
  }

    // Countdown to bets closed
    updateCountdown() {
      this.countdownSeconds = Math.floor(Number(this.proposal.endTime) - Number(Date.now()) / 1000);
      if (this.countdownSeconds <= 0) {
        this.countdown = "";   
        this.updateStatus();
        clearInterval(this.countdownEvent);
      } else {
        const hours = Math.floor(this.countdownSeconds / 3600);
        const minutes = Math.floor((this.countdownSeconds % 3600) / 60);
        const seconds = Math.floor(this.countdownSeconds % 60);
        this.countdown = `${hours}h ${minutes}m ${seconds}s`;
      }
    }

}
