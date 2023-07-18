import { SETTINGS } from 'src/app.utils';
import { CreateTicketDto } from './dto/CreateTicket.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateTicketDto } from './dto/UpdateTicket.dto';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  getAllTicket(query: any) {
    return this.prisma.ticket.findMany();
  }
  getTicketById(id: string) {
    return this.prisma.ticket.findUnique({ where: { id } });
  }

  createTicket(ticket: CreateTicketDto) {
    return this.prisma.ticket.create({ data: ticket });
  }
  createManyTicket(tickets: CreateTicketDto[]) {
    return this.prisma.$transaction(
      tickets.map((ticket) => this.prisma.ticket.create({ data: ticket })),
    );
  }

  updateTicketById(id: string, body: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: { id },
      data: body,
    });
  }

  deleteTicketById(id: string) {
    return this.prisma.ticket.delete({ where: { id } });
  }
}
