import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrderTourModule } from 'src/orderTour/orderTour.module';

@Module({
  imports: [PrismaModule, OrderTourModule],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [],
})
export class OrderModule {}
