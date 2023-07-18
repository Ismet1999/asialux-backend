import { OrderTicket as OrderTicketModel } from '@prisma/client';

export class OrderTicket implements OrderTicketModel {
  id: string;
  createdAt: Date;
  orderId: string;
  ticketId: string;
  ticketDestination: string;
  flightDate: Date;
}
