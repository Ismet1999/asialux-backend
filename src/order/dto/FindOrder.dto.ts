import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
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
    example: '1',
    description: 'branch id',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'branch id must be a valid string' })
  branchId: string;

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
