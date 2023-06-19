import { User as UserModel } from '@prisma/client';

export class User implements UserModel {
  id: string;
  photo: string;
  fullName: string;
  password: string;
  phone: string[];
  passportSeries: string;
  branchId: string;
  createdAt: Date;
  status: boolean;
  role: string;
  superAdmin: boolean;
}
