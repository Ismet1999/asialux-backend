import { ApiProperty } from '@nestjs/swagger';

import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { ROLES } from '../user.utils';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User fullName' })
  @IsOptional()
  @IsString({ message: 'fullName must be a valid string' })
  fullName: string;

  @ApiProperty({ example: [' +998 99 999 99 99'], description: 'User phone' })
  @IsArray({ message: 'phone must be a valid array' })
  @ArrayMinSize(1)
  @IsString({ each: true, message: 'phone must be a valid string' })
  phone: string[];

  // @ApiProperty({ example: 1 })
  // @IsNotEmpty({ message: 'branch is required' })
  // branch: number;

  @ApiProperty({
    example: 'photo',
    description: 'User photo',
  })
  photo: string;

  @ApiProperty({
    example: 'password',
    description: 'User password',
  })
  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    },
    { message: 'Password is too weak' },
  )
  @IsString({ message: 'Password must be a valid string' })
  password: string;

  // @ApiProperty({
  //   example: 'password',
  //   description: 'User password confirmation',
  // })
  // @IsNotEmpty({ message: 'Password confirmation is required' })
  // @Match('password', { message: 'Passwords do not match' })
  // passwordConfirmation: string;

  @ApiProperty({
    example: 'passportSeries',
    description: 'User passportSeries',
  })
  @IsNotEmpty({ message: 'passportSeries is required' })
  @IsString({ message: 'passportSeries must be a valid string' })
  passportSeries: string;

  @ApiProperty({
    example: '1',
    description: 'User branchId',
  })
  @IsNotEmpty({ message: 'branchId is required' })
  @IsString({ message: 'branchId must be a valid string' })
  branchId: string;

  @ApiProperty({
    example: ROLES.USER,
    description: 'User role',
  })
  @IsNotEmpty({ message: 'role is required' })
  @IsString({ message: 'role must be a valid string' })
  role: ROLES;

  @ApiProperty({
    example: true,
    description: 'User status',
  })
  @IsOptional()
  @IsBoolean({ message: 'status must be a valid boolean' })
  status: boolean;
}
