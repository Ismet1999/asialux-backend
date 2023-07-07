import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePartnerDto {
  @ApiProperty({
    example: 'name',
    description: 'Partner name',
  })
  @IsOptional()
  @IsString({ message: 'name must be a valid string' })
  name: string;

  // link: string;
  // data: Prisma.JsonValue;

  @ApiProperty({
    example: 'link',
    description: 'Partner link',
  })
  @IsOptional()
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
