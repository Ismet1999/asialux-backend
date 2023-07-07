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
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePartnerDto } from './dto/CreatePartner.dto';
import { PartnerService } from './partner.service';
import { SETTINGS } from 'src/app.utils';
import { Partner } from './partner.entity';
import { UpdatePartnerDto } from './dto/UpdatePartner.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Partner')
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}
  @ApiOperation({ summary: 'Get all Partner' })
  @ApiResponse({
    status: 200,
    type: [Partner],
    description: 'The list of Partner',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllPartner(@Query() query: any) {
    return this.partnerService.getAllPartner(query);
  }

  @ApiOperation({ summary: 'Get a partner' })
  @ApiOkResponse({ status: 200, type: Partner, description: 'The partner' })
  @ApiBadRequestResponse({ status: 404, description: 'The partner not found' })
  @Get('/:id')
  async getPartnerById(@Param('id') id: string) {
    try {
      const partner = await this.partnerService.getPartnerById(id);
      if (!partner) throw new NotFoundException('Partner not found');
      return partner;
    } catch (error) {
      throw new NotFoundException('Partner not found');
    }
  }

  @ApiOperation({ summary: 'Create a new partner' })
  @ApiResponse({ status: 201, type: Partner, description: 'The partner' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createPartner(
    @Body()
    createPartnerDto: CreatePartnerDto,
  ) {
    try {
      const res = await this.partnerService.createPartner(createPartnerDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a partner' })
  @ApiResponse({ status: 200, type: Partner, description: 'The partner' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updatePartner(
    @Param('id') id: string,
    @Body()
    updatePartnerDto: UpdatePartnerDto,
  ) {
    try {
      const res = await this.partnerService.updatePartnerById(
        id,
        updatePartnerDto,
      );
      if (!res) throw new NotFoundException('Partner not found');
      return res;
    } catch (error) {
      throw new BadRequestException('Partner not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a partner' })
  @ApiResponse({ status: 204, description: 'The partner' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deletePartner(@Param('id') id: string) {
    return this.partnerService.deletePartnerById(id);
  }
}
