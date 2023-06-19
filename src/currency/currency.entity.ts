import { Currency as CurrencyModel } from '@prisma/client';

export class Currency implements CurrencyModel {
  id: string;
  currency: string;
  createdAt: Date;
  date: string;
  value: number;
}
