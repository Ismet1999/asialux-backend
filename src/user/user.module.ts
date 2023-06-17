import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HashService } from './hash.service';
import { UsersController } from './users.controller';
import { Users, UsersSchema } from './users.schema';
import { UsersService } from './users.service';
import { VerifyCode, VerifyCodeSchema } from './verifyCode.schema';
import { MailModule } from '../mail/mail.module';

@Module({
  // imports: [TypeOrmModule.forFeature([Users])],
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    MongooseModule.forFeature([
      { name: VerifyCode.name, schema: VerifyCodeSchema },
    ]),
    MailModule,
  ],
  providers: [UsersService, HashService],
  controllers: [UsersController],
  exports: [UsersService, HashService],
})
export class UsersModule {}
