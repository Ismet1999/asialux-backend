import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBranchDto {
  @ApiProperty({
    example: 'name',
    description: 'Branch name',
  })
  @IsNotEmpty({ message: 'name is required' })
  @IsString({ message: 'name must be a valid string' })
  name: string;

  @ApiProperty({
    example: 'companyId',
    description: 'Branch companyId',
  })
  @IsNotEmpty({ message: 'companyId is required' })
  @IsString({ message: 'companyId must be a valid string' })
  companyId: string;
}
