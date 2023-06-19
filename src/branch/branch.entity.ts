import { Branch as BranchModel } from '@prisma/client';

export class Branch implements BranchModel {
  id: string;
  name: string;
  createdAt: Date;
}
