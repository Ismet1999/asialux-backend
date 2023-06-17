import { Branch as BranchModel } from '@prisma/client';

export class Branch implements BranchModel {
  id: number;
  name: string;
  createdAt: Date;
}
