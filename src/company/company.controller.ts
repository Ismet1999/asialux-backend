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
import { CreateCompanyDto } from './dto/CreateCompany.dto';
import { CompanyService } from './company.service';
import { SETTINGS } from 'src/app.utils';
import { Company } from './company.entity';
import { UpdateCompanyDto } from './dto/UpdateCompany.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @ApiOperation({ summary: 'Get all Company' })
  @ApiResponse({
    status: 200,
    type: [Company],
    description: 'The list of Company',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllCompany(@Query() query: any) {
    return this.companyService.getAllCompany(query);
  }

  @ApiOperation({ summary: 'Get a company' })
  @ApiOkResponse({ status: 200, type: Company, description: 'The company' })
  @ApiBadRequestResponse({ status: 404, description: 'The company not found' })
  @Get('/:id')
  async getCompanyById(@Param('id') id: string) {
    try {
      const company = await this.companyService.getCompanyById(id);
      if (!company) throw new NotFoundException('Company not found');
      return company;
    } catch (error) {
      throw new NotFoundException('Company not found');
    }
  }

  @ApiOperation({ summary: 'Create a new company' })
  @ApiResponse({ status: 201, type: Company, description: 'The company' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createCompany(
    @Body()
    createCompanyDto: CreateCompanyDto,
  ) {
    try {
      const res = await this.companyService.createCompany(createCompanyDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a company' })
  @ApiResponse({ status: 200, type: Company, description: 'The company' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateCompany(
    @Param('id') id: string,
    @Body()
    updateCompanyDto: UpdateCompanyDto,
  ) {
    try {
      const res = await this.companyService.updateCompanyById(
        id,
        updateCompanyDto,
      );
      if (!res) throw new NotFoundException('Company not found');
      return res;
    } catch (error) {
      throw new BadRequestException('Company not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a company' })
  @ApiResponse({ status: 204, description: 'The company' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteCompany(@Param('id') id: string) {
    return this.companyService.deleteCompanyById(id);
  }
}
