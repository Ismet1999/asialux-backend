import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePartnerDto {
  @ApiProperty({
    example: 'name',
    description: 'Partner name',
  })
  @IsNotEmpty({ message: 'name is required' })
  @IsString({ message: 'name must be a valid string' })
  name: string;

  // link: string;
  // data: Prisma.JsonValue;

  @ApiProperty({
    example: 'link',
    description: 'Partner link',
  })
  @IsNotEmpty({ message: 'link is required' })
  @IsString({ message: 'link must be a valid string' })
  link: string;

  @ApiProperty({
    example: {
      key: 'value',
    },
    description: 'Partner data',
  })
  @IsOptional()
  data?: object;
}
