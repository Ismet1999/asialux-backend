import { Order as OrderModel } from '@prisma/client';

export class Order implements OrderModel {
  id: string;
  orderNumber: bigint;
  type: string;
  createdAt: Date;
  clientId: string;
  userId: string;
  branchId: string;
  b2bPrice: number;
  b2cPrice: number;
  files: string[];
}
