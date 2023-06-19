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
import { CreateBranchDto } from './dto/CreateBranch.dto';
import { BranchService } from './branch.service';
import { SETTINGS } from 'src/app.utils';
import { Branch } from './branch.entity';
import { UpdateBranchDto } from './dto/UpdateBranch.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Branch')
@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}
  @ApiOperation({ summary: 'Get all Branch' })
  @ApiResponse({
    status: 200,
    type: [Branch],
    description: 'The list of Branch',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllBranch(@Query() query: any) {
    return this.branchService.getAllBranch(query);
  }

  @ApiOperation({ summary: 'Get a branch' })
  @ApiOkResponse({ status: 200, type: Branch, description: 'The branch' })
  @ApiBadRequestResponse({ status: 404, description: 'The branch not found' })
  @Get('/:id')
  async getBranchById(@Param('id') id: string) {
    try {
      const branch = await this.branchService.getBranchById(id);
      if (!branch) throw new NotFoundException('Branch not found');
      return branch;
    } catch (error) {
      throw new NotFoundException('Branch not found');
    }
  }

  @ApiOperation({ summary: 'Create a new branch' })
  @ApiResponse({ status: 201, type: Branch, description: 'The branch' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createBranch(
    @Body(SETTINGS.VALIDATION_PIPE)
    createBranchDto: CreateBranchDto,
  ) {
    try {
      const res = await this.branchService.createBranch(createBranchDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a branch' })
  @ApiResponse({ status: 200, type: Branch, description: 'The branch' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateBranch(
    @Param('id') id: string,
    @Body(SETTINGS.VALIDATION_PIPE)
    updateBranchDto: UpdateBranchDto,
  ) {
    try {
      const res = await this.branchService.updateBranchById(
        id,
        updateBranchDto,
      );
      if (!res) throw new NotFoundException('Branch not found');
      return res;
    } catch (error) {
      throw new BadRequestException('Branch not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a branch' })
  @ApiResponse({ status: 204, description: 'The branch' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteBranch(@Param('id') id: string) {
    return this.branchService.deleteBranchById(id);
  }
}
