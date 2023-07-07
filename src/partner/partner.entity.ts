import { Partner as PartnerModel, Prisma } from '@prisma/client';

export class Partner implements PartnerModel {
  id: string;
  createdAt: Date;
  name: string;
  link: string;
  data: Prisma.JsonValue;
}
