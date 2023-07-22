import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { OrderType } from '../order.utils';

export class CreateTourOrderDto {
  // type: string;
  // clientId: string;
  // userId: string;
  // branchId: string;
  // price: number;

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

  @ApiProperty({
    example: '1',
    description: 'tour id',
  })
  @IsNotEmpty({ message: 'tour id is required' })
  @IsString({ message: 'tour id must be a valid string' })
  tourId: string;

  // ticketId
  @ApiProperty({
    example: '1',
    description: 'ticket id',
  })
  @IsNotEmpty({ message: 'ticket id is required' })
  @IsString({ message: 'ticket id must be a valid string' })
  ticketId: string;

  // tourDestination
  @ApiProperty({
    example: '1',
    description: 'tour destination',
  })
  @IsNotEmpty({ message: 'tour destination is required' })
  @IsString({ message: 'tour destination must be a valid string' })
  tourDestination: string;

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
    description: 'flight date',
  })
  @IsNotEmpty({ message: 'flight date is required' })
  @IsDateString(
    { strict: true },
    { message: 'flight date must be a valid date (YYYY-MM-DD )' },
  )
  flightDate: Date;
}
