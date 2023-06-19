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

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    ClientModule,
    BranchModule,
    OrderModule,
    CurrencyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
