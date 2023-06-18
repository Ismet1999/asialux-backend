import { Currency as CurrencyModel } from '@prisma/client';

export class Currency implements CurrencyModel {
  id: number;
  currency: string;
  createdAt: Date;
  date: string;
  value: number;
}
