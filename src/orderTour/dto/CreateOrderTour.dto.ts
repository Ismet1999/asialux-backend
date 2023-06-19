import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderTourDto {
  @ApiProperty({
    example: '1',
    description: 'order id',
  })
  @IsNotEmpty({ message: 'order id is required' })
  @IsString({ message: 'order id must be a valid string' })
  orderId: string;

  @ApiProperty({
    example: '1',
    description: 'ticket id',
  })
  @IsNotEmpty({ message: 'ticket id is required' })
  @IsString({ message: 'ticket id must be a valid string' })
  ticketId: string;

  @ApiProperty({
    example: '1',
    description: 'tour id',
  })
  @IsNotEmpty({ message: 'tour id is required' })
  @IsString({ message: 'tour id must be a valid string' })
  tourId: string;

  @ApiProperty({
    example: '1',
    description: 'tour destination',
  })
  @IsNotEmpty({ message: 'tour destination is required' })
  @IsString({ message: 'tour destination must be a valid string' })
  tourDestination: string;

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

  @ApiProperty({
    example: 100,
    description: 'b2b price',
  })
  @IsNotEmpty({ message: 'b2b price is required' })
  @IsNumber({}, { message: 'b2b price must be a valid number' })
  b2bPrice: number;

  @ApiProperty({
    example: 100,
    description: 'b2c price',
  })
  @IsNotEmpty({ message: 'b2c price is required' })
  @IsNumber({}, { message: 'b2c price must be a valid number' })
  b2cPrice: number;
}
