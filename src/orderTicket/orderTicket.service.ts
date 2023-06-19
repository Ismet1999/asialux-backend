import { SETTINGS } from 'src/app.utils';
import { CreateOrderTicketDto } from './dto/CreateOrderTicket.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateOrderTicketDto } from './dto/UpdateOrderTicket.dto';

@Injectable()
export class OrderTicketService {
  constructor(private prisma: PrismaService) {}

  getAllOrder(query: any) {
    return this.prisma.orderTicket.findMany();
  }
  getOrderById(id: string) {
    return this.prisma.orderTicket.findUnique({ where: { id } });
  }

  createOrder(order: CreateOrderTicketDto) {
    return this.prisma.orderTicket.create({ data: order });
  }

  updateOrderById(id: string, body: UpdateOrderTicketDto) {
    return this.prisma.orderTicket.update({
      where: { id },
      data: body,
    });
  }

  deleteOrderById(id: string) {
    return this.prisma.orderTicket.delete({ where: { id } });
  }
}
