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
  // clientId: string;
  // userId: string;
  // branchId: string;
  // price: number;

  @ApiProperty({
    example: ORDER_TYPE.Tour,
    description: 'order type  (tour, ticket, visa)',
  })
  @IsNotEmpty({ message: 'order is required' })
  @IsString({ message: 'order must be a valid string' })
  type: ORDER_TYPE;

  @ApiProperty({
    example: '1',
    description: 'client id',
  })
  @IsNotEmpty({ message: 'client id is required' })
  @IsString({ message: 'client id must be a valid string' })
  clientId: string;

  @ApiProperty({
    example: '1',
    description: 'user id',
  })
  @IsNotEmpty({ message: 'user id is required' })
  @IsString({ message: 'user id must be a valid string' })
  userId: string;

  @ApiProperty({
    example: '1',
    description: 'branch id',
  })
  @IsNotEmpty({ message: 'branch id is required' })
  @IsString({ message: 'branch id must be a valid string' })
  branchId: string;

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
