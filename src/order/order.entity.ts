import { Order as OrderModel } from '@prisma/client';

export class Order implements OrderModel {
  id: number;
  type: string;
  createdAt: Date;
  clientId: number;
  userId: number;
  branchId: number;
  price: number;
}
