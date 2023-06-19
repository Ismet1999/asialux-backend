import { Payment as PaymentModel } from '@prisma/client';
import { PaymentType } from './payment.type';

export class Payment implements PaymentModel {
  id: string;
  createdAt: Date;
  type: PaymentType;
  rawAmount: number;
  rawCurrency: string;
  invoiceId: string;
  paymentAmount: number;
  branchId: string;
  userId: string;
}
