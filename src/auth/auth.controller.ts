import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/Login.Dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { ReqData } from './auth.type';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Body() data: LoginDto, @Request() req: ReqData) {
    return this.authService.generateToken(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('refresh')
  async refresh(@Request() req: ReqData) {
    return this.authService.generateToken(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('me')
  test(@Request() req: ReqData) {
    return req.user;
  }
}
