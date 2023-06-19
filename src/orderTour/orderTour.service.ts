import { SETTINGS } from 'src/app.utils';
import { CreateOrderTourDto } from './dto/CreateOrderTour.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateOrderTourDto } from './dto/UpdateOrderTour.dto';

@Injectable()
export class OrderTourService {
  constructor(private prisma: PrismaService) {}

  getAllOrder(query: any) {
    return this.prisma.orderTour.findMany();
  }
  getOrderById(id: string) {
    return this.prisma.orderTour.findUnique({ where: { id } });
  }

  createOrder(order: CreateOrderTourDto) {
    return this.prisma.orderTour.create({ data: order });
  }

  updateOrderById(id: string, body: UpdateOrderTourDto) {
    return this.prisma.orderTour.update({
      where: { id },
      data: body,
    });
  }

  deleteOrderById(id: string) {
    return this.prisma.orderTour.delete({ where: { id } });
  }
}
