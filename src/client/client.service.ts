import { SETTINGS } from 'src/app.utils';
import { CreateClientDto } from './dto/CreateClient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateClientDto } from './dto/UpdateClient.dto';
import { FindClientDto } from './dto/FindClient.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  getAllClient(query: FindClientDto) {
    return this.prisma.client.findMany({
      where: {
        ...query,
        fullName: {
          contains: query.fullName,
        },
        passportSeries: {
          contains: query.passportSeries,
        },
        userId: {
          contains: query.userId,
        },
      },
    });
  }
  getClientById(id: string) {
    return this.prisma.client.findUnique({ where: { id } });
  }

  createClient(client: CreateClientDto, userId: string) {
    return this.prisma.client.create({
      data: {
        ...client,
        userId,
      },
    });
  }
  createManyClient(clients: CreateClientDto[], userId: string) {
    // return this.prisma.client.createMany({
    //   data: clients,
    //   skipDuplicates: true,
    // });
    return this.prisma.$transaction(
      clients.map((client) =>
        this.prisma.client.create({ data: { ...client, userId } }),
      ),
    );
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
