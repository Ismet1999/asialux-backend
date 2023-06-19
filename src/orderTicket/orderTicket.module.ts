import { Module } from '@nestjs/common';
import { OrderTicketController } from './orderTicket.controller';
import { OrderTicketService } from './orderTicket.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OrderTicketService],
  controllers: [OrderTicketController],
  exports: [],
})
export class OrderTicketModule {}
