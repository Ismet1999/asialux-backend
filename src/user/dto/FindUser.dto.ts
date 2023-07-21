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
  @ApiProperty({
    required: false,
    example: 'John Doe',
    description: 'User fullName',
  })
  @IsOptional()
  @IsString({ message: 'fullName must be a valid string' })
  fullName: string;

  @ApiProperty({
    required: false,
    example: 'passportSeries',
    description: 'User passportSeries',
  })
  @IsOptional()
  @IsString({ message: 'passportSeries must be a valid string' })
  passportSeries: string;

  @ApiProperty({
    required: false,
    example: 'mainPhone',
    description: 'User mainPhone',
  })
  @IsOptional()
  @IsString({ message: 'mainPhone must be a valid string' })
  mainPhone: string;

  @ApiProperty({ required: false, example: 1, description: 'User branchId' })
  @IsOptional()
  @IsString({ message: 'branchId must be a valid string' })
  branchId: string;

  @ApiProperty({
    required: false,
    example: ROLES.USER,
    description: 'User role',
  })
  @IsOptional()
  @IsEnum(ROLES)
  role: ROLES;

  @ApiProperty({ required: false, example: true, description: 'User status' })
  @IsOptional()
  @IsBoolean()
  status: boolean;
}
// export class UpdateUserDto extends OmitType(CreateUserDto, [
//   'password',
//   'role',
// ] as const) {}
