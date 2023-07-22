import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isNumber,
} from 'class-validator';
import { OrderType } from '../order.utils';

export class FindOrderDto {
  // type: string;
  // clientId: string;
  // userId: string;
  // branchId: string;
  // price: number;

  @ApiProperty({
    example: OrderType.Tour,
    description: 'order type  (tour, ticket, visa)',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'order must be a valid string' })
  type: OrderType;

  @ApiProperty({
    example: '1',
    description: 'client id',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'client id must be a valid string' })
  clientId: string;

  @ApiProperty({
    example: '1',
    description: 'user id',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'user id must be a valid string' })
  userId: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'userFullName',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'userFullName must be a valid string' })
  userFullName: string;

  @ApiProperty({
    example: 'AB1234567',
    description: 'userPassportSeries',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'userPassportSeries must be a valid string' })
  userPassportSeries: string;

  @ApiProperty({
    example: '+9989898989',
    description: 'userPhone',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'userPhone must be a valid string' })
  userPhone: string;

  @ApiProperty({
    example: '1',
    description: 'branch id',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'branch id must be a valid string' })
  branchId: string;

  // orderNumber

  @ApiProperty({
    example: '1',
    description: 'order number',
    required: false,
  })
  @IsOptional()
  @IsNumber({}, { message: 'order number must be a valid number' })
  orderNumber: number;

  @ApiProperty({
    example: '2021-09-01',
    description: 'start date',
    required: false,
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
    required: false,
  })
  @IsOptional()
  @IsDateString(
    { strict: true },
    { message: 'end date must be a valid date (YYYY-MM-DD )' },
  )
  endDate: Date;
}
