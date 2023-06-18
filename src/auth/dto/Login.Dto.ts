import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class LoginDto {
  // login
  @ApiProperty({
    example: '+998912345678',
    description: 'User login',
  })
  @IsNotEmpty({ message: 'login is required' })
  @IsString({ message: 'login must be a valid string  phone or email' })
  login: string;

  // email
  // @ApiProperty({
  //   example: 'example@mail.com',
  //   description: 'User email',
  // })
  // @IsOptional()
  // @IsEmail({}, { message: 'email must be a valid email' })
  // email: string;
  // // phone
  // @ApiProperty({
  //   example: '+998912345678',
  //   description: 'User phone',
  // })
  // @IsOptional()
  // @IsPhoneNumber('UZ', { message: 'phone must be a valid phone number' })
  // phone: string;

  // password
  @ApiProperty({
    example: 'Pass123',
    description: 'Password',
  })
  @IsNotEmpty({ message: 'password is required' })
  @IsString({ message: 'password must be a valid string' })
  password: string;
}
