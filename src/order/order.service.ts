import { SETTINGS } from 'src/app.utils';
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateOrderDto } from './dto/UpdateOrder.dto';
import { ReqData } from 'src/auth/auth.type';
import { FindOrderDto } from './dto/FindOrder.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  getAllOrder(where: FindOrderDto) {
    return this.prisma.order.findMany({
      where: {
        branchId: where.branchId,
        userId: where.userId,
        createdAt: {
          gte: where.startDate,
          lte: where.endDate,
        },
        clientId: where.clientId,
        type: where.type,
      },
    });
  }
  getOrderById(id: string) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  createOrder(order: CreateOrderDto, user: ReqData['user']) {
    return this.prisma.order.create({
      data: { ...order, branchId: user.branchId, userId: user.id },
    });
  }

  updateOrderById(id: string, body: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: body,
    });
  }
  updateFileOrderById(id: string, body: { files: string[] }) {
    return this.prisma.order.update({
      where: { id },
      data: {
        files: {
          push: body.files,
        },
      },
    });
  }

  deleteOrderById(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}
