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
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Query,
  ParseArrayPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserService } from './user.service';
import { ROLES } from './user.utils';
import { User } from './user.entity';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { SETTINGS } from 'src/app.utils';
import { FindUserDto } from './dto/FindUser.dto';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: 'Get all user' })
  @ApiResponse({
    status: 200,
    type: [User],
    description: 'The list of user',
  })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Get('/query')
  // findUsers(@Query('companyId') companyId?: string) {
  //   return this.userService.getUsers({ companyId });
  // }
  @Get('/')
  findAllUser(@Query() query: FindUserDto) {
    return this.userService.getAllUser(query);
  }

  @ApiOperation({ summary: 'Get a roles' })
  @ApiResponse({ status: 200, type: [String], description: 'The roles' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/roles')
  async getRoles() {
    return Object.values(ROLES);
  }

  @ApiOperation({ summary: 'Get a user' })
  @ApiResponse({ status: 200, type: User, description: 'The user' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    try {
      const res = await this.userService.getUserById(id);
      if (!res) throw new NotFoundException();
      return res;
    } catch (error) {
      throw new NotFoundException('User not found: ' + error.message);
    }
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, type: User, description: 'The user created' })
  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      // if (!createUserDto.email && !createUserDto.phone_number) {
      //   throw new BadRequestException('Email or phone number is required');
      // }
      // //  check if user exists by email or phone number
      // const user = await this.userService.getUserByEmailOrPhone(
      //   createUserDto.email,
      //   createUserDto.phone_number,
      // );
      // if (user) throw new BadRequestException('User already exists');
      const res = await this.userService.createUser(createUserDto);
      return res;
    } catch (error) {
      throw new BadRequestException('User not created:' + error.message);
    }
  }

  @ApiOperation({ summary: 'Create a new many user' })
  @ApiResponse({ status: 201, type: [User], description: 'The users created' })
  @Post('/many')
  async createManyUser(
    @Body(new ParseArrayPipe({ items: CreateUserDto }))
    createUserDto: CreateUserDto[],
  ) {
    try {
      // if (!createUserDto.email && !createUserDto.phone_number) {
      //   throw new BadRequestException('Email or phone number is required');
      // }
      // //  check if user exists by email or phone number
      // const user = await this.userService.getUserByEmailOrPhone(
      //   createUserDto.email,
      //   createUserDto.phone_number,
      // );
      // if (user) throw new BadRequestException('User already exists');
      const res = await this.userService.createManyUser(createUserDto);
      return res;
    } catch (error) {
      throw new BadRequestException('User not created:' + error.message);
    }
  }

  // update user role by id
  // @ApiOperation({ summary: 'Update a user role' })
  // @ApiResponse({ status: 200, type: User, description: 'The user updated' })
  // @Patch('/:id')
  // async updateUserRoleById(@Param('id') id: string) {
  //   try {
  //     const res = await this.userService.patchUserById(id, {
  //       role: ROLES.USER,
  //     });
  //     if (!res) throw new NotFoundException();
  //     return res;
  //   } catch (error) {
  //     throw new BadRequestException('User not updated: ' + error.message);
  //   }
  // }

  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({ status: 200, type: User, description: 'The user updated' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body()
    updateUserDto: UpdateUserDto,
  ) {
    try {
      const res = await this.userService.updateUserById(id, updateUserDto);
      if (!res) throw new NotFoundException();
      return res;
    } catch (error) {
      throw new BadRequestException('User not updated: ' + error.message);
    }
  }

  @Post(':id/photo')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: SETTINGS.STORAGE_PHOTO,
    }),
  )
  async uploadFile(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000000 }),
          new FileTypeValidator({ fileType: 'image/*' }),
        ],
      }),
    )
    photo: Express.Multer.File,
  ) {
    try {
      await this.userService.updatePhotoUserById(id, { photo: photo.path });
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
    return this.userService.deleteUserById(id);
  }
}
