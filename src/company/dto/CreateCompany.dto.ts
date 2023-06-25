import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({
    example: 'name',
    description: 'Company name',
  })
  @IsNotEmpty({ message: 'name is required' })
  @IsString({ message: 'name must be a valid string' })
  name: string;
}
