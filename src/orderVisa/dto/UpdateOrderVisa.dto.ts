import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateOrderVisaDto {
  // orderId: string;
  // visaId: string;
  // b2cPrice: number;

  @ApiProperty({
    example: '1',
    description: 'order id',
  })
  @IsOptional()
  @IsString({ message: 'order id must be a valid string' })
  orderId: string;

  @ApiProperty({
    example: '1',
    description: 'visa id',
  })
  @IsOptional()
  @IsString({ message: 'visa id must be a valid string' })
  visaId: string;

  @ApiProperty({
    example: '1',
    description: 'tour id',
  })
  @IsOptional()
  @IsString({ message: 'tour id must be a valid string' })
  tourId: string;

  @ApiProperty({
    example: 1,
    description: 'countPeople price',
  })
  @IsOptional()
  @IsNumber({}, { message: 'countPeople price must be a valid number' })
  countPeople: number;
}
