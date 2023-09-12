import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { ProposalDetailsComponent } from './proposal-details/proposal-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'proposals', component: ProposalsComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'create-proposal', component: CreateProposalComponent },
  { path: 'proposal-details/:address', component: ProposalDetailsComponent }, // assuming you'll pass proposal ID in the route for details
  { path: '', redirectTo: '/proposals', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/proposals', pathMatch: 'full' }, // wildcard route for 404 not found pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }