import { OrderVisa as OrderVisaModel } from '@prisma/client';

export class OrderVisa implements OrderVisaModel {
  id: string;
  createdAt: Date;
  orderId: string;
  visaId: string;
  b2cPrice: number;
}
