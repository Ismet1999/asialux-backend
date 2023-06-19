import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchModule } from './branch/branch.module';
import { UsersModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { CurrencyModule } from './currency/currency.module';
import { OrderModule } from './order/order.module';
import { OrderTourModule } from './orderTour/orderTour.module';
import { OrderTicketModule } from './orderTicket/orderTicket.module';
import { OrderVisaModule } from './orderVisa/orderVisa.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    ClientModule,
    BranchModule,
    OrderModule,
    OrderTourModule,
    OrderTicketModule,
    OrderVisaModule,
    InvoiceModule,
    CurrencyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
