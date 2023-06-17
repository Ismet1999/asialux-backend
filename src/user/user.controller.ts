import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Patch,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from '@prisma/client';

import { UsersService } from './user.service';
import { ROLES, SETTINGS } from './user.utils';
@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    type: [User],
    description: 'The list of users',
  })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/')
  findAllUsers(query: any) {
    return this.usersService.getAllUsers(query);
  }

  @ApiOperation({ summary: 'Get a user' })
  @ApiResponse({ status: 200, type: User, description: 'The user' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    try {
      const res = await this.usersService.getUserById(id);
      if (!res) throw new NotFoundException();
      return res;
    } catch (error) {
      throw new NotFoundException('User not found: ' + error.message);
    }
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, type: User, description: 'The user created' })
  @Post('/')
  async createUser(
    @Body(SETTINGS.VALIDATION_PIPE)
    createUserDto: CreateUserDto,
  ) {
    try {
      if (!createUserDto.email && !createUserDto.phone_number) {
        throw new BadRequestException('Email or phone number is required');
      }
      //  check if user exists by email or phone number
      const user = await this.usersService.getUserByEmailOrPhone(
        createUserDto.email,
        createUserDto.phone_number,
      );
      if (user) throw new BadRequestException('User already exists');
      const res = await this.usersService.createUser(createUserDto);
      return res;
    } catch (error) {
      throw new BadRequestException('User not created:' + error.message);
    }
  }
  // update user role by id
  @ApiOperation({ summary: 'Update a user role' })
  @ApiResponse({ status: 200, type: User, description: 'The user updated' })
  @Patch('/:id')
  async updateUserRoleById(@Param('id') id: string) {
    try {
      const res = await this.usersService.patchUserById(id, {
        role: ROLES.ADMIN,
      });
      if (!res) throw new NotFoundException();
      return res;
    } catch (error) {
      throw new BadRequestException('User not updated: ' + error.message);
    }
  }

  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({ status: 200, type: User, description: 'The user updated' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  updateUser(
    @Param('id') id: string,
    @Body(SETTINGS.VALIDATION_PIPE)
    createUserDto: CreateUserDto,
  ) {
    try {
      const res = this.usersService.updateUserById(id, createUserDto);
      if (!res) throw new NotFoundException();
      return res;
    } catch (error) {
      throw new BadRequestException('User not updated: ' + error.message);
    }
  }

  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({ status: 204, description: 'The user deleted' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUserById(id);
  }
}
