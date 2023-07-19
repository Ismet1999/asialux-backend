import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class FindInvoiceDto {
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
  @IsOptional()
  @IsString({ message: 'order id must be a valid string' })
  orderId: string;

  @ApiProperty({
    example: '1',
    description: 'client id',
  })
  @IsOptional()
  @IsString({ message: 'client id must be a valid string' })
  clientId: string;

  @ApiProperty({
    example: '1',
    description: 'branch id',
  })
  @IsOptional()
  @IsString({ message: 'branch id must be a valid string' })
  branchId: string;

  @ApiProperty({
    example: '1',
    description: 'user id',
  })
  @IsOptional()
  @IsString({ message: 'user id must be a valid string' })
  userId: string;
}
