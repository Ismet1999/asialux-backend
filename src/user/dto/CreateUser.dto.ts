import { ApiParam, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  ValidateNested,
} from 'class-validator';
import { Match } from 'src/decorators/match.decorator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User fullName' })
  @IsOptional()
  @IsString({ message: 'fullName must be a valid string' })
  fullName: string;

  @ApiProperty({ example: ' +998 99 999 99 99', description: 'User phone' })
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(2)
  @Type(() => String)
  phone: string[];

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
      minNumbers: 1,
      minSymbols: 0,
    },
    { message: 'Password is too weak' },
  )
  password: string;

  @ApiProperty({
    example: 'password',
    description: 'User password confirmation',
  })
  @IsNotEmpty({ message: 'Password confirmation is required' })
  @Match('password', { message: 'Passwords do not match' })
  passwordConfirmation: string;

  @ApiProperty({
    example: 'passportSeries',
    description: 'User passportSeries',
  })
  @IsNotEmpty({ message: 'passportSeries is required' })
  passportSeries: string;

  @ApiProperty({
    example: 'branchId',
    description: 'User branchId',
  })
  @IsNotEmpty({ message: 'branchId is required' })
  branchId: number;

  @ApiProperty({
    example: 'role',
    description: 'User role',
  })
  @IsNotEmpty({ message: 'role is required' })
  role: string;

  @ApiProperty({
    example: true,
    description: 'User status',
  })
  @IsOptional()
  @IsBoolean({ message: 'status must be a valid boolean' })
  status: boolean;
}
