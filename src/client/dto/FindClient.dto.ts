import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator';

export class FindClientDto {
  // @ApiProperty({
  // required: false ,
  //   example: 'name',
  //   description: 'Client name',
  // })
  // @IsOptional()
  // @IsString({ message: 'name must be a valid string' })
  // name: string;
  @ApiProperty({
    required: false,
    example: 'fullName',
    description: 'Client fullName',
  })
  @IsOptional()
  @IsString({ message: 'fullName must be a valid string' })
  fullName: string;

  @ApiProperty({
    required: false,
    example: 'passportSeries',
    description: 'Client passportSeries',
  })
  @IsOptional()
  @IsString({ message: 'passportSeries must be a valid string' })
  passportSeries: string;

  @ApiProperty({
    required: false,
    example: 'userId',
    description: 'Client userId',
  })
  @IsOptional()
  @IsString({ message: 'userId must be a valid string' })
  userId: string;
}
