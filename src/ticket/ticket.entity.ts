import { Ticket as TicketModel, Prisma } from '@prisma/client';

export class Ticket implements TicketModel {
  id: string;
  createdAt: Date;
  orderTourId: string;
  ticketId: string;
  clientId: string;
  orderTicketId: string;
}
