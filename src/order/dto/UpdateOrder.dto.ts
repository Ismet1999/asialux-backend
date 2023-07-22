import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsNumber, IsString } from 'class-validator';
import { OrderType } from '../order.utils';

export class UpdateOrderDto {
  @ApiProperty({
    example: OrderType.Tour,
    description: 'order type  (tour, ticket, visa)',
  })
  @IsOptional()
  @IsString({ message: 'order must be a valid string' })
  type: OrderType;

  @ApiProperty({
    example: '1',
    description: 'client id',
  })
  @IsOptional()
  @IsString({ message: 'client id must be a valid string' })
  clientId: string;

  @ApiProperty({
    example: '1',
    description: 'user id',
  })
  @IsOptional()
  @IsString({ message: 'user id must be a valid string' })
  userId: string;

  @ApiProperty({
    example: '1',
    description: 'branch id',
  })
  @IsOptional()
  @IsString({ message: 'branch id must be a valid string' })
  branchId: string;

  @ApiProperty({
    example: 100,
    description: 'b2bPrice',
  })
  @IsOptional()
  @IsNumber({}, { message: 'b2bPrice must be a valid number' })
  b2bPrice: number;

  @ApiProperty({
    example: 100,
    description: 'b2cPrice',
  })
  @IsOptional()
  @IsNumber({}, { message: 'b2cPrice must be a valid number' })
  b2cPrice: number;
}
