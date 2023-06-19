import { Module } from '@nestjs/common';
import { OrderVisaController } from './orderVisa.controller';
import { OrderVisaService } from './orderVisa.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OrderVisaService],
  controllers: [OrderVisaController],
  exports: [],
})
export class OrderVisaModule {}
