import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  // @ApiProperty({
  //   example: 'name',
  //   description: 'Client name',
  // })
  // @IsNotEmpty({ message: 'name is required' })
  // @IsString({ message: 'name must be a valid string' })
  // name: string;

  @ApiProperty({
    example: 'fullName',
    description: 'Client fullName',
  })
  @IsNotEmpty({ message: 'fullName is required' })
  @IsString({ message: 'fullName must be a valid string' })
  fullName: string;

  @ApiProperty({ example: [' +998 99 999 99 99'], description: 'Client phone' })
  @IsArray({ message: 'phone must be a valid array' })
  @ArrayMinSize(1)
  @IsString({ each: true, message: 'phone must be a valid string' })
  phone: string[];

  @ApiProperty({
    example: 'passportSeries',
    description: 'Client passportSeries',
  })
  @IsNotEmpty({ message: 'passportSeries is required' })
  passportSeries: string;
}
