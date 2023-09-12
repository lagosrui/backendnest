import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Proposal, ProposalSchema } from '../schema/proposal.schema';
import { ProposalService } from './proposal.service';
import { ProposalController } from './proposal.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Proposal.name, schema: ProposalSchema }])
  ],
  providers: [ProposalService],
  controllers: [ProposalController],
  exports: [ProposalService],  // Optional: only if you plan to use the ProposalService elsewhere
})
export class ProposalModule {}
