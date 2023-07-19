import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { ROLES } from '../user.utils';

// export class UpdateUserDto extends CreateUserDto {}

export class FindUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User fullName' })
  @IsOptional()
  @IsString({ message: 'fullName must be a valid string' })
  fullName: string;

  @ApiProperty({
    example: 'passportSeries',
    description: 'User passportSeries',
  })
  @IsOptional()
  @IsString({ message: 'passportSeries must be a valid string' })
  passportSeries: string;

  @ApiProperty({
    example: 1,
    description: 'User branchId',
  })
  @IsOptional()
  @IsString({ message: 'branchId must be a valid string' })
  branchId: string;

  @ApiProperty({
    example: ROLES.USER,
    description: 'User role',
  })
  @IsOptional()
  @IsEnum(ROLES)
  role: ROLES;

  @ApiProperty({
    example: true,
    description: 'User status',
  })
  @IsOptional()
  @IsBoolean()
  status: boolean;
}
// export class UpdateUserDto extends OmitType(CreateUserDto, [
//   'password',
//   'role',
// ] as const) {}
