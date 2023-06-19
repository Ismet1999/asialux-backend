import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ORDER_TYPE } from '../order.utils';

export class CreateOrderDto {
  // type: string;
  // clientId: number;
  // userId: number;
  // branchId: number;
  // price: number;

  @ApiProperty({
    example: ORDER_TYPE.Tour,
    description: 'order type  (tour, ticket, visa)',
  })
  @IsNotEmpty({ message: 'order is required' })
  @IsString({ message: 'order must be a valid string' })
  type: ORDER_TYPE;

  @ApiProperty({
    example: 1,
    description: 'client id',
  })
  @IsNotEmpty({ message: 'client id is required' })
  @IsNumber({}, { message: 'client id must be a valid number' })
  clientId: number;

  @ApiProperty({
    example: 1,
    description: 'user id',
  })
  @IsNotEmpty({ message: 'user id is required' })
  @IsNumber({}, { message: 'user id must be a valid number' })
  userId: number;

  @ApiProperty({
    example: 1,
    description: 'branch id',
  })
  @IsNotEmpty({ message: 'branch id is required' })
  @IsNumber({}, { message: 'branch id must be a valid number' })
  branchId: number;

  @ApiProperty({
    example: 100,
    description: 'price',
  })
  @IsNotEmpty({ message: 'price is required' })
  @IsNumber({}, { message: 'price must be a valid number' })
  price: number;

  @ApiProperty({
    example: '2021-09-01',
    description: 'start date',
  })
  @IsNotEmpty({ message: 'start date is required' })
  @IsDateString(
    { strict: true },
    { message: 'start date must be a valid date (YYYY-MM-DD )' },
  )
  startDate: Date;

  @ApiProperty({
    example: '2021-09-01',
    description: 'end date',
  })
  @IsNotEmpty({ message: 'end date is required' })
  @IsDateString(
    { strict: true },
    { message: 'end date must be a valid date (YYYY-MM-DD )' },
  )
  endDate: Date;
}
