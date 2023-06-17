import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { HashService } from './hash.service';
import { ROLES } from './user.utils';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private hashService: HashService,
    private prisma: PrismaService,
  ) {}
  getAllUsers(query: any) {
    return this.prisma.user.findMany();
  }
  async createUser(user: CreateUserDto) {
    void 0;
  }
  getUserById(id: string) {
    return this.prisma.user.findUnique({ where: { id: +id } });
  }

  updateUserById(id: string, body: CreateUserDto) {
    return this.prisma.user.update({
      where: { id: +id },
      data: body,
    });
  }

  patchUserById(id: string, body: any) {
    return this.prisma.user.update({
      where: { id: +id },
      data: body,
    });
  }
  deleteUserById(id: string) {
    return this.prisma.user.delete({ where: { id: +id } });
  }

  getUserByPassportSeries(passport: string) {
    return this.prisma.user.findUnique({ where: { passportSeries: passport } });
  }
}
