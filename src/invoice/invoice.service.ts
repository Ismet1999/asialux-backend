import { SETTINGS } from 'src/app.utils';
import { CreateInvoiceDto } from './dto/CreateInvoice.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateInvoiceDto } from './dto/UpdateInvoice.dto';
import { ReqData } from 'src/auth/auth.type';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  getAllInvoice(where: Prisma.InvoiceWhereInput) {
    return this.prisma.invoice.findMany({ where });
  }
  getInvoiceById(id: string) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  createInvoice(order: CreateInvoiceDto, user: ReqData['user']) {
    return this.prisma.invoice.create({
      data: { ...order, branchId: user.branchId, userId: user.id },
    });
  }

  updateInvoiceById(id: string, body: UpdateInvoiceDto) {
    return this.prisma.invoice.update({
      where: { id },
      data: body,
    });
  }

  deleteInvoiceById(id: string) {
    return this.prisma.invoice.delete({ where: { id } });
  }
}
