import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCompanyDto {
  @ApiProperty({
    example: 'name',
    description: 'Company name',
  })
  @IsOptional()
  @IsString({ message: 'name must be a valid string' })
  name: string;
}
