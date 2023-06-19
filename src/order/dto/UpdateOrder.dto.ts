import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsNumber, IsString } from 'class-validator';
import { ORDER_TYPE } from '../order.utils';

export class UpdateOrderDto {
  @ApiProperty({
    example: ORDER_TYPE.Tour,
    description: 'order type  (tour, ticket, visa)',
  })
  @IsOptional()
  @IsString({ message: 'order must be a valid string' })
  type: ORDER_TYPE;

  @ApiProperty({
    example: 1,
    description: 'client id',
  })
  @IsOptional()
  @IsNumber({}, { message: 'client id must be a valid number' })
  clientId: number;

  @ApiProperty({
    example: 1,
    description: 'user id',
  })
  @IsOptional()
  @IsNumber({}, { message: 'user id must be a valid number' })
  userId: number;

  @ApiProperty({
    example: 1,
    description: 'branch id',
  })
  @IsOptional()
  @IsNumber({}, { message: 'branch id must be a valid number' })
  branchId: number;

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
