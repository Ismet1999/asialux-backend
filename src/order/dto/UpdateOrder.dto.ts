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
    description: 'price',
  })
  @IsOptional()
  @IsNumber({}, { message: 'price must be a valid number' })
  price: number;

  @ApiProperty({
    example: '2021-09-01',
    description: 'start date',
  })
  @IsOptional()
  @IsDateString(
    { strict: true },
    { message: 'start date must be a valid date (YYYY-MM-DD )' },
  )
  startDate: Date;

  @ApiProperty({
    example: '2021-09-01',
    description: 'end date',
  })
  @IsOptional()
  @IsDateString(
    { strict: true },
    { message: 'end date must be a valid date (YYYY-MM-DD )' },
  )
  endDate: Date;
}
