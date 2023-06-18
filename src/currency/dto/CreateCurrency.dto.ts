import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateCurrencyDto {
  // currency: string;
  // date: Date;
  // value: number;

  @ApiProperty({
    example: 'usd',
    description: ' currency',
  })
  @IsNotEmpty({ message: 'currency is required' })
  @IsString({ message: 'currency must be a valid string' })
  currency: string;

  @ApiProperty({
    example: '2021-01-01',
    description: 'date',
  })
  @IsNotEmpty({ message: 'date is required' })
  @IsString({ message: 'date must be a valid string' })
  date: string;

  @ApiProperty({
    example: 1,
    description: 'value',
  })
  @IsNotEmpty({ message: 'value is required' })
  @IsNumber({}, { message: 'value must be a valid number' })
  value: number;
}
