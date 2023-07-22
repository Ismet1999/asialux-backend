import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrderTourModule } from 'src/orderTour/orderTour.module';
import { OrderTicketModule } from 'src/orderTicket/orderTicket.module';
import { InvoiceModule } from 'src/invoice/invoice.module';

@Module({
  imports: [PrismaModule, InvoiceModule, OrderTourModule, OrderTicketModule],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [],
})
export class OrderModule {}
