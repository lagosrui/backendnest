import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { Proposal } from '../schema/proposal.schema';
import { CreateProposalDto } from '../assets/dto/create_proposal.dto';
import { ProposalService } from './proposal.service';


@Controller('proposals')
export class ProposalController {
  constructor(private readonly proposalService: ProposalService) {}

  @Get("getAddress")
  async getAddress(): Promise<any> {
    return this.proposalService.getAddress();
  }

  @Post("create_proposal")
  async createProposal(@Body() proposalDTO: CreateProposalDto): Promise<string> {
    return this.proposalService.createProposal(proposalDTO);
    
  }
  @Get("simulate_fee/:amountRequesting")
  calculateFee(@Param('amountRequesting') amountRequesting: number): number | string {
    return this.proposalService.calculateFee(amountRequesting);
  }

  @Get("live_proposals")
  async getLiveProposals(): Promise<Proposal[]> {
    return this.proposalService.getLiveProposals();
  }

  @Get("ended_proposals")
  async getEndedProposals(): Promise<Proposal[]> {
    return this.proposalService.getEndedProposals();
  }

  @Get('user_proposals:address')
  async getUserProposals(
      @Param('address') address: string):Promise<Proposal[]> {
    return this.proposalService.getUserProposals(address);
  }

  @Get(':address')
  async getProposal(
        @Param('address') address: string): Promise<Proposal> {
      const campaign = await this.proposalService.getProposal(address);
      console.log(campaign);
    return campaign;
  }

  // IMPORTANT TO CONTROLL THIS CALLS 
  @Put(':id')
  async updateProposal(@Param('id') id: string, @Body() proposal: Proposal): Promise<Proposal> {
    return this.proposalService.updateProposal(id, proposal);
  }

  @Delete(':id')
  async deleteProposal(@Param('id') id: string): Promise<Proposal> {
    return this.proposalService.deleteProposal(id);
  }
}

// typechain --target ethers-v6 --out-dir app/contracts './node_modules/neufund-contracts/build/contracts/*.json'
