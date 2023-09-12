import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
  endedProposals?: any[];

  constructor(
    private apiService: ApiService,
    private router: Router) {
    this.endedProposals = [];
  }

  ngOnInit(): void {
    this.getEndedProposals();
  }

  getEndedProposals(): void {
    this.apiService.getEndedProposals().subscribe({
      next: (response) => {
        this.endedProposals = response;
      },
      error: (error) =>  {
        console.error('Error fetching ended proposals:', error);
      }
    });
  }

  proposalDetail(address: string): void {
    this.router.navigate(['/proposal-details', address]);
  }

}
