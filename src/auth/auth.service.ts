import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../user/hash.service';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { ReqData } from './auth.type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {}
  async validateUserCredentials(
    login: string,
    password: string,
  ): Promise<User | Error> {
    const user = await this.userService.getUserByMainPhone(login);
    if (!user) throw new NotFoundException('User not found');
    const valid = await this.hashService.comparePassword(
      password,
      user.password,
    );

    if (!valid) throw new UnauthorizedException();

    return user;
  }
  async generateToken(user: ReqData['user']) {
    // Generate JWT token here
    const userData: ReqData['user'] = {
      id: user.id,
      fullName: user.fullName,
      photo: user.photo,
      role: user.role,
      branchId: user.branchId,
    };
    const access_token = await this.jwtService.signAsync(userData, {
      expiresIn: '1h',
    });
    const refresh_token = await this.jwtService.signAsync(userData, {
      expiresIn: '1d',
    });
    return {
      access_token,
      refresh_token,
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
