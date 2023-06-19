import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateOrderTourDto {
  @ApiProperty({
    example: '1',
    description: 'order id',
  })
  @IsOptional()
  @IsString({ message: 'order id must be a valid string' })
  orderId: string;

  @ApiProperty({
    example: '1',
    description: 'ticket id',
  })
  @IsOptional()
  @IsString({ message: 'ticket id must be a valid string' })
  ticketId: string;

  @ApiProperty({
    example: '1',
    description: 'tour id',
  })
  @IsOptional()
  @IsString({ message: 'tour id must be a valid string' })
  tourId: string;

  @ApiProperty({
    example: '1',
    description: 'tour destination',
  })
  @IsOptional()
  @IsString({ message: 'tour destination must be a valid string' })
  tourDestination: string;

  @ApiProperty({
    example: '2021-09-01',
    description: 'flight date',
  })
  @IsOptional()
  @IsDateString(
    { strict: true },
    { message: 'flight date must be a valid date (YYYY-MM-DD )' },
  )
  flightDate: Date;

  @ApiProperty({
    example: 100,
    description: 'b2b price',
  })
  @IsOptional()
  @IsNumber({}, { message: 'b2b price must be a valid number' })
  b2bPrice: number;

  @ApiProperty({
    example: 100,
    description: 'b2c price',
  })
  @IsOptional()
  @IsNumber({}, { message: 'b2c price must be a valid number' })
  b2cPrice: number;
}
