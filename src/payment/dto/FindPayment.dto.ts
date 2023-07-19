import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString, IsEnum } from 'class-validator';
import { PaymentType } from '../payment.type';

export class FindPaymentDto {
  // type: string;
  // rawAmount: number;
  // rawCurrency: string;
  // invoiceId: string;
  // paymentAmount: PaymentType;
  // branchId: string;
  // userId: string;

  @ApiProperty({
    example: PaymentType.CASH,
    description: 'payment type (cash, card, transfer)',
  })
  @IsOptional({ message: 'payment type is required' })
  @IsEnum(PaymentType)
  type: PaymentType;

  @ApiProperty({
    example: '1',
    description: 'invoice id',
  })
  @IsOptional({ message: 'invoice id is required' })
  @IsString({ message: 'invoice id must be a valid string' })
  invoiceId: string;

  @ApiProperty({
    example: '1',
    description: 'branch id',
  })
  @IsOptional({ message: 'branch id is required' })
  @IsString({ message: 'branch id must be a valid string' })
  branchId: string;

  @ApiProperty({
    example: '1',
    description: 'user id',
  })
  @IsOptional({ message: 'user id is required' })
  @IsString({ message: 'user id must be a valid string' })
  userId: string;
}
