import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCurrencyDto {
  @ApiProperty({
    example: 'usd',
    description: ' currency',
  })
  @IsOptional()
  @IsString({ message: 'currency must be a valid string' })
  currency: string;

  @ApiProperty({
    example: '2021-01-01',
    description: 'date',
  })
  @IsOptional()
  @IsDateString(
    { strict: true },
    { message: 'date must be a valid date (YYYY-MM-DD )' },
  )
  date: string;

  @ApiProperty({
    example: 1,
    description: 'value',
  })
  @IsOptional()
  @IsNumber({}, { message: 'value must be a valid number' })
  value: number;
}
