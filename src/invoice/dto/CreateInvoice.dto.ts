import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDto {
  // orderId: string;
  // clientId: string;
  // invoiceAmount: number;
  // invoiceStatus: string;
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

  @ApiProperty({
    example: '1',
    description: 'invoice status',
  })
  @IsNotEmpty({ message: 'invoice status is required' })
  @IsString({ message: 'invoice status must be a valid string' })
  invoiceStatus: string;

  @ApiProperty({
    example: '1',
    description: 'branch id',
  })
  @IsNotEmpty({ message: 'branch id is required' })
  @IsString({ message: 'branch id must be a valid string' })
  branchId: string;

  @ApiProperty({
    example: '1',
    description: 'user id',
  })
  @IsNotEmpty({ message: 'user id is required' })
  @IsString({ message: 'user id must be a valid string' })
  userId: string;
}
