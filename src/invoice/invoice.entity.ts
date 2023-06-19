import { Invoice as InvoiceModel } from '@prisma/client';

export class Invoice implements InvoiceModel {
  id: string;
  createdAt: Date;
  orderId: string;
  clientId: string;
  invoiceAmount: number;
  invoiceStatus: string;
  branchId: string;
  userId: string;
}
