import { SETTINGS } from 'src/app.utils';
import { CreateOrderVisaDto } from './dto/CreateOrderVisa.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateOrderVisaDto } from './dto/UpdateOrderVisa.dto';

@Injectable()
export class OrderVisaService {
  constructor(private prisma: PrismaService) {}

  getAllOrder(query: any) {
    return this.prisma.orderVisa.findMany();
  }
  getOrderById(id: string) {
    return this.prisma.orderVisa.findUnique({ where: { id } });
  }

  createOrder(order: CreateOrderVisaDto) {
    return this.prisma.orderVisa.create({
      data: order,
    });
  }

  updateOrderById(id: string, body: UpdateOrderVisaDto) {
    return this.prisma.orderVisa.update({
      where: { id },
      data: body,
    });
  }

  deleteOrderById(id: string) {
    return this.prisma.orderVisa.delete({ where: { id } });
  }
}
