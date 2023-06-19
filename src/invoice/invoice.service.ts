import { SETTINGS } from 'src/app.utils';
import { CreateInvoiceDto } from './dto/CreateInvoice.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateInvoiceDto } from './dto/UpdateInvoice.dto';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  getAllOrder(query: any) {
    return this.prisma.invoice.findMany();
  }
  getOrderById(id: string) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  createOrder(order: CreateInvoiceDto) {
    return this.prisma.invoice.create({
      data: order,
    });
  }

  updateOrderById(id: string, body: UpdateInvoiceDto) {
    return this.prisma.invoice.update({
      where: { id },
      data: body,
    });
  }

  deleteOrderById(id: string) {
    return this.prisma.invoice.delete({ where: { id } });
  }
}
