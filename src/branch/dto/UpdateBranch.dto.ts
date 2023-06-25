import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBranchDto {
  @ApiProperty({
    example: 'name',
    description: 'Branch name',
  })
  @IsOptional()
  @IsString({ message: 'name must be a valid string' })
  name: string;

  @ApiProperty({
    example: 'companyId',
    description: 'Branch companyId',
  })
  @IsOptional()
  @IsString({ message: 'companyId must be a valid string' })
  companyId: string;
}
