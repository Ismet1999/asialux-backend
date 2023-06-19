import { Module } from '@nestjs/common';
import { OrderTourController } from './orderTour.controller';
import { OrderTourService } from './orderTour.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OrderTourService],
  controllers: [OrderTourController],
  exports: [],
})
export class OrderTourModule {}
