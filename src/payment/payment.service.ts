import { SETTINGS } from 'src/app.utils';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdatePaymentDto } from './dto/UpdatePayment.dto';
import { PaymentStatus } from './payment.type';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  getAllPayment(where: Prisma.PaymentWhereInput) {
    return this.prisma.payment.findMany({
      where,
    });
  }
  getPaymentById(id: string) {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  createPayment(payment: CreatePaymentDto) {
    return this.prisma.payment.create({
      data: { ...payment, status: PaymentStatus.PENDING },
    });
  }

  updatePaymentById(id: string, body: UpdatePaymentDto) {
    return this.prisma.payment.update({
      where: { id },
      data: body,
    });
  }

  deletePaymentById(id: string) {
    return this.prisma.payment.delete({ where: { id } });
  }
}
