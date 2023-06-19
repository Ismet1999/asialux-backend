import { OrderTour as OrderTourModel } from '@prisma/client';

export class OrderTour implements OrderTourModel {
  id: string;
  createdAt: Date;
  orderId: string;
  ticketId: string;
  tourId: string;
  tourDestination: string;
  flightDate: Date;
  b2bPrice: number;
  b2cPrice: number;
}
