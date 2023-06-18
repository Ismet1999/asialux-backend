import { SETTINGS } from 'src/app.utils';
import { CreateClientDto } from './dto/CreateClient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  getAllClient(query: any) {
    return this.prisma.client.findMany();
  }
  getClientById(id: string) {
    return this.prisma.client.findUnique({ where: { id: +id } });
  }

  createClient(client: CreateClientDto) {
    return this.prisma.client.create({
      data: client as Prisma.ClientCreateInput,
    });
  }

  updateClientById(id: string, body: CreateClientDto) {
    return this.prisma.client.update({
      where: { id: +id },
      data: body,
    });
  }

  deleteClientById(id: string) {
    return this.prisma.client.delete({ where: { id: +id } });
  }
}
