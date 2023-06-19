import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateBranchDto {
  @ApiProperty({
    example: 'name',
    description: 'Branch name',
  })
  @IsOptional()
  @IsString({ message: 'name must be a valid string' })
  name: string;
}
