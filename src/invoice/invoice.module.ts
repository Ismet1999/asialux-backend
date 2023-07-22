import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [InvoiceService],
  controllers: [InvoiceController],
  exports: [InvoiceService],
})
export class InvoiceModule {}
