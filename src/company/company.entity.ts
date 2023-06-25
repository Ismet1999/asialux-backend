import { Company as CompanyModel } from '@prisma/client';

export class Company implements CompanyModel {
  id: string;
  name: string;
  createdAt: Date;
}
