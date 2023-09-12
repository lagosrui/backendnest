import { ethers } from 'ethers';
import { Model } from 'mongoose'; 
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DonationPlatformContract, DonationPlatformContract__factory } from 'src/assets/contracts';
import * as DonationPlatformJson from "../assets/contracts/DonationPlatformContract.json";

import { CreateProposalDto } from '../assets/dto/create_proposal.dto';
import { Proposal, IProposal } from '../schema/proposal.schema';

require('dotenv').config();


function setupProvider() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
  console.log(provider);
  return provider;
};


@Injectable()
export class ProposalService {

  provider: ethers.Provider;
  signer: ethers.Wallet;
  contract: any;
  contractInterface: any = DonationPlatformJson["abi"];

  constructor(
    @InjectModel(Proposal.name) private proposalModel: Model<IProposal>
  ) {
    this.provider = setupProvider();
    this.signer = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);

    this.contract = new ethers.Contract(
      process.env.DONATION_PLATFORM_CONTRACT, this.contractInterface, this.signer
    ) as unknown as DonationPlatformContract;

    this.contractInterface = new ethers.Interface(this.contractInterface);
  }

  async getAddress(): Promise<any> {
    return await this.contract.getAddress()
  }

  // proposalDTO to validate inputs 
  async createProposal(proposalDTO: CreateProposalDto): Promise<string> {
    let tx: any;
    let receipt: any;
    let proposalAddress: string;
    let size = 0;

    // write to contract
    console.log(proposalDTO);
    const fee = this.calculateFee(proposalDTO.amountRequested);
    console.log(fee);
    try {
      tx = await this.contract.createCampaign(
        proposalDTO.receiverAddress,
        // IPFS set to empty for now 
        'empty',
        proposalDTO.amountRequested,
        proposalDTO.endTime
      )
      receipt = await tx.wait();
      size = await this.contract.getReceiverCampaignsSize(proposalDTO.receiverAddress);
      // big Int to Number 
      size = Number(ethers.formatEther(size));
      size = Math.max(0, size - 1); // in case its the first campaign
      //console.log(size);
      proposalAddress = await this.contract.getReceiverCampaignByIndex(
        proposalDTO.receiverAddress, size);
      console.log(proposalAddress);
      /* Replace by reading Event logs 
      error: RangeError: data out-of-bounds (buffer=0x, length=0, offset=32, code=BUFFER_OVERRUN, version=6.7.1)
    
      let decodedData = this.contractInterface.parseLog(receipt.logs[0]);
      */

    } catch (error) {
      console.log(error);
      console.log("error");
      return error['info']['error']['message'];
    }
    
    // transform into schema 
    const schemaFormat = {
      proposalAddress: proposalAddress,
      receiverAddress: proposalDTO.receiverAddress,
      title: proposalDTO.title,
      description: proposalDTO.description,
      endTime: proposalDTO.endTime,
      amountRequested: proposalDTO.amountRequested,
      open: true,
      success: false
    }
    console.log(schemaFormat);
    try {
      const newProposal = new this.proposalModel(schemaFormat);
      newProposal.save();
    } catch(error) {return "Failed to Save";}

    return tx.hash;

  }

  async getLiveProposals(): Promise<Proposal[]> {
    return await this.proposalModel.find({ open: true }).exec(); 
  }

  async getEndedProposals(): Promise<Proposal[]> {
      return await this.proposalModel.find({ open: false }).exec(); 
  }

  async getUserProposals(_receiverAddress: string): Promise<Proposal[]> {
    return await this.proposalModel.find({receiverAddress: _receiverAddress}).exec(); 
  }

  async getProposal(_proposalAddress: string): Promise<any> {
    return await this.proposalModel.find({proposalAddress: _proposalAddress}).exec(); 
  }
  
  // encapsulation function
  async updateProposal(_proposalAddress: string, proposal: Proposal): Promise<Proposal> {
    return this.proposalModel.findOneAndUpdate(
      // filter
      {proposalAddress: _proposalAddress}, 
      // what to update
      {}, 
      // return new document 
      { new: true }).exec();
  }

  // admin function
  async deleteProposal(_proposalAddress: string): Promise<Proposal> {
    return this.proposalModel.findOneAndDelete({proposalAddress: _proposalAddress}).exec();
  }

  calculateFee(amountRequesting: number): number | string {
    const minFee: number = 1;
    const maxFee: number = 10;
    const minAmount: number = 100;
    const maxAmount: number = 1_000_000;
    if (amountRequesting < minAmount || amountRequesting > maxAmount) {
      return 'Failed'
    }

    // Calculate the fee percentage using a logarithmic relationship
    const feePercentage: number =
      maxFee + (minFee - maxFee) * (Math.log(amountRequesting) / Math.log(maxAmount));

      
    // Ensure the fee percentage is within the valid range
    const fee: number = Math.max(minFee, Math.min(Math.round(feePercentage), maxFee));

    return fee;
  }

}