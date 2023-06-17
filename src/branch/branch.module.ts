import { Module } from '@nestjs/common';
import { BranchController } from './branch.controller';
import { BranchService } from './branch.service';

@Module({
  providers: [BranchService],
  controllers: [BranchController],
  exports: [],
})
export class BranchModule {}
