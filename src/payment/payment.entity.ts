import { Payment as PaymentModel } from '@prisma/client';
import { PaymentType } from './payment.type';

export class Payment implements PaymentModel {
  id: string;
  type: string;
  rawAmount: number;
  rawCurrency: string;
  status: string;
  createdAt: Date;
  invoiceId: string;
  paymentAmount: number;
  branchId: string;
  userId: string;
}
