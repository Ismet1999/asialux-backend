import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateInvoiceDto {
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
  @IsOptional({ message: 'order id is required' })
  @IsString({ message: 'order id must be a valid string' })
  orderId: string;

  @ApiProperty({
    example: '1',
    description: 'client id',
  })
  @IsOptional({ message: 'client id is required' })
  @IsString({ message: 'client id must be a valid string' })
  clientId: string;

  @ApiProperty({
    example: 1000,
    description: 'invoice amount',
  })
  @IsOptional({ message: 'invoice amount is required' })
  @IsNumber({}, { message: 'invoice amount must be a valid number' })
  invoiceAmount: number;

  @ApiProperty({
    example: '1',
    description: 'invoice status',
  })
  @IsOptional({ message: 'invoice status is required' })
  @IsString({ message: 'invoice status must be a valid string' })
  invoiceStatus: string;

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
