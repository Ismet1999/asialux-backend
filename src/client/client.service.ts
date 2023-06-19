import { SETTINGS } from 'src/app.utils';
import { CreateClientDto } from './dto/CreateClient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateClientDto } from './dto/UpdateClient.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  getAllClient(query: any) {
    return this.prisma.client.findMany();
  }
  getClientById(id: string) {
    return this.prisma.client.findUnique({ where: { id } });
  }

  createClient(client: CreateClientDto) {
    return this.prisma.client.create({
      data: client,
    });
  }

  updateClientById(id: string, body: UpdateClientDto) {
    return this.prisma.client.update({
      where: { id },
      data: body,
    });
  }

  deleteClientById(id: string) {
    return this.prisma.client.delete({ where: { id } });
  }
}
