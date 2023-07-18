import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { InvoiceStatus } from '../invoice.type';

export class CreateInvoiceDto {
  // orderId: string;
  // clientId: string;
  // invoiceAmount: number;
  // status: string;
  // branchId: string;
  // userId: string;

  @ApiProperty({
    example: '1',
    description: 'order id',
  })
  @IsNotEmpty({ message: 'order id is required' })
  @IsString({ message: 'order id must be a valid string' })
  orderId: string;

  @ApiProperty({
    example: '1',
    description: 'client id',
  })
  @IsNotEmpty({ message: 'client id is required' })
  @IsString({ message: 'client id must be a valid string' })
  clientId: string;

  @ApiProperty({
    example: 1000,
    description: 'invoice amount',
  })
  @IsNotEmpty({ message: 'invoice amount is required' })
  @IsNumber({}, { message: 'invoice amount must be a valid number' })
  invoiceAmount: number;
}
