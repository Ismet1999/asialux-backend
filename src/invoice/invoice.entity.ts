import { Invoice as InvoiceModel } from '@prisma/client';
import { InvoiceStatus } from './invoice.type';

export class Invoice implements InvoiceModel {
  id: string;
  createdAt: Date;
  orderId: string;
  clientId: string;
  invoiceAmount: number;
  status: InvoiceStatus;
  branchId: string;
  userId: string;
}
