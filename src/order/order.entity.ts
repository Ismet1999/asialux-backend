import { Order as OrderModel } from '@prisma/client';

export class Order implements OrderModel {
  id: string;
  type: string;
  orderNumber: bigint;
  createdAt: Date;
  clientId: string;
  userId: string;
  branchId: string;
  price: number;
}
