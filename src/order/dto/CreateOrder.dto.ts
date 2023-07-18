import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { OrderType } from '../order.utils';

export class CreateOrderDto {
  // type: string;
  // clientId: string;
  // userId: string;
  // branchId: string;
  // price: number;

  @ApiProperty({
    example: OrderType.Tour,
    description: 'order type  (tour, ticket, visa)',
  })
  @IsNotEmpty({ message: 'order is required' })
  @IsString({ message: 'order must be a valid string' })
  type: OrderType;

  @ApiProperty({
    example: '1',
    description: 'client id',
  })
  @IsNotEmpty({ message: 'client id is required' })
  @IsString({ message: 'client id must be a valid string' })
  clientId: string;

  // @ApiProperty({
  //   example: '1',
  //   description: 'user id',
  // })
  // @IsNotEmpty({ message: 'user id is required' })
  // @IsString({ message: 'user id must be a valid string' })
  // userId: string;

  // @ApiProperty({
  //   example: '1',
  //   description: 'branch id',
  // })
  // @IsNotEmpty({ message: 'branch id is required' })
  // @IsString({ message: 'branch id must be a valid string' })
  // branchId: string;

  @ApiProperty({
    example: 100,
    description: 'b2bPrice',
  })
  @IsNotEmpty({ message: 'b2bPrice is required' })
  @IsNumber({}, { message: 'b2bPrice must be a valid number' })
  b2bPrice: number;

  @ApiProperty({
    example: 100,
    description: 'b2cPrice',
  })
  @IsNotEmpty({ message: 'b2cPrice is required' })
  @IsNumber({}, { message: 'b2cPrice must be a valid number' })
  b2cPrice: number;

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
