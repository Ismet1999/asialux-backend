import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchModule } from './branch/branch.module';
import { UsersModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [AuthModule, BranchModule, UsersModule, PrismaModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
