import { SETTINGS } from 'src/app.utils';
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateOrderDto } from './dto/UpdateOrder.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  getAllOrder(query: any) {
    return this.prisma.order.findMany();
  }
  getOrderById(id: string) {
    return this.prisma.order.findUnique({ where: { id: +id } });
  }

  createOrder(order: CreateOrderDto) {
    return this.prisma.order.create({ data: order });
  }

  updateOrderById(id: string, body: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id: +id },
      data: body,
    });
  }

  deleteOrderById(id: string) {
    return this.prisma.order.delete({ where: { id: +id } });
  }
}
