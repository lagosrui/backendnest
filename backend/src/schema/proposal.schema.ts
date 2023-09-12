import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BlobOptions } from 'buffer';
import { Document } from 'mongoose';

@Schema()
export class Proposal {

  @Prop({ required: true, unique: true })
  proposalAddress: string; // Proposal identifier

  @Prop({ required: true })
  receiverAddress: string; // User identifier

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({required: true})
  endTime: number;

  @Prop({ default: 100 })
  amountRequested: number;

  @Prop({ default: true })
  open: boolean;

  @Prop({ default: false })
  success: boolean;
}

export const ProposalSchema = SchemaFactory.createForClass(Proposal);
export type IProposal = Proposal & Document;