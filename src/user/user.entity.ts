import { User as UserModel } from '@prisma/client';

export class User implements UserModel {
  photo: string;
  password: string;
  phone: string[];
  passportSeries: string;
  createdAt: Date;
  status: boolean;
  role: string;
  superAdmin: boolean;
  id: number;
  fullName: string;
  branchId: number;
}
