import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderVisaDto {
  // orderId: string;
  // visaId: string;
  // b2cPrice: number;

  @ApiProperty({
    example: '1',
    description: 'order id',
  })
  @IsNotEmpty({ message: 'order id is required' })
  @IsString({ message: 'order id must be a valid string' })
  orderId: string;

  @ApiProperty({
    example: '1',
    description: 'visa id',
  })
  @IsNotEmpty({ message: 'visa id is required' })
  @IsString({ message: 'visa id must be a valid string' })
  visaId: string;

  @ApiProperty({
    example: '1',
    description: 'tour id',
  })
  @IsNotEmpty({ message: 'tour id is required' })
  @IsString({ message: 'tour id must be a valid string' })
  tourId: string;

  @ApiProperty({
    example: 1,
    description: 'countPeople price',
  })
  @IsNotEmpty({ message: 'countPeople price is required' })
  @IsNumber({}, { message: 'countPeople price must be a valid number' })
  countPeople: number;

  @ApiProperty({
    example: '1',
    description: 'b2c price',
  })
  @IsNotEmpty({ message: 'b2c price is required' })
  @IsNumber({}, { message: 'b2c price must be a valid number' })
  b2cPrice: number;
}
