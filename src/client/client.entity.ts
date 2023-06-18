import { Client as ClientModel } from '@prisma/client';

export class Client implements ClientModel {
  id: number;
  fullName: string;
  phone: string[];
  passportSeries: string;
  createdAt: Date;
}
