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
import { PaymentModule } from './payment/payment.module';
import { CompanyModule } from './company/company.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PartnerModule } from './partner/partner.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CompanyModule,
    BranchModule,
    UsersModule,
    ClientModule,
    OrderModule,
    OrderTourModule,
    OrderTicketModule,
    OrderVisaModule,
    TicketModule,
    InvoiceModule,
    PaymentModule,
    CurrencyModule,
    PartnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
