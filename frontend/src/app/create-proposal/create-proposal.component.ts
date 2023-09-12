import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent {

  hash: string = ''

  constructor (private apiService: ApiService) {}

  createProposal(
    proposalName: string,
    amountRequested: string,
    timestamp: string,
    category: string,
    description: string,
    ): void {
      this.apiService.putCreateCampaign(
        proposalName,
        amountRequested,
        timestamp,
        category,
        description
      ).subscribe({
        next: (response) => {
          this.hash = response;
        },
        error: (error) =>  {
          console.error('Error creating proposal:', error);
        }
      });
    }
}
