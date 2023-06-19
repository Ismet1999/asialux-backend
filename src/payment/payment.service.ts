import { SETTINGS } from 'src/app.utils';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdatePaymentDto } from './dto/UpdatePayment.dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  getAllOrder(query: any) {
    return this.prisma.payment.findMany();
  }
  getOrderById(id: string) {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  createOrder(order: CreatePaymentDto) {
    return this.prisma.payment.create({
      data: order,
    });
  }

  updateOrderById(id: string, body: UpdatePaymentDto) {
    return this.prisma.payment.update({
      where: { id },
      data: body,
    });
  }

  deleteOrderById(id: string) {
    return this.prisma.payment.delete({ where: { id } });
  }
}
