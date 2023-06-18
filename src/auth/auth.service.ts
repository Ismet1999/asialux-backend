import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../users/hash.service';
import { Users } from '../users/users.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {}
  async validateUserCredentials(
    login: string,
    password: string,
  ): Promise<Users | Error> {
    const user = await this.userService.getUserByEmailOrPhone(login, login);
    if (!user) throw new NotFoundException('User not found');
    const valid = await this.hashService.comparePassword(
      password,
      user.password,
    );

    if (!valid) throw new UnauthorizedException();

    return user;
  }
  async generateToken(user: Users) {
    // Generate JWT token here
    const userData = {
      _id: user._id,
      email: user.email,
      name: user.name,
      phone_number: user.phone_number,
      role: user.role,
    };
    return {
      access_token: await this.jwtService.signAsync(userData, {
        expiresIn: '1d',
      }),
      data: userData,
    };
  }
  validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new BadRequestException('Invalid token');
    }
  }
  getUserFromToken(token: string) {
    try {
      return this.jwtService.decode(token);
    } catch (error) {
      throw new BadRequestException('Invalid token');
    }
  }
}
