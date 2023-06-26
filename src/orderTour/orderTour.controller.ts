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
import { CreateOrderTourDto } from './dto/CreateOrderTour.dto';
import { OrderTourService } from './orderTour.service';
import { SETTINGS } from 'src/app.utils';
import { OrderTour } from './orderTour.entity';
import { UpdateOrderTourDto } from './dto/UpdateOrderTour.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('OrderTour')
@Controller('order-tour')
export class OrderTourController {
  constructor(private readonly orderTourService: OrderTourService) {}
  @ApiOperation({ summary: 'Get all OrderTour' })
  @ApiResponse({
    status: 200,
    type: [OrderTour],
    description: 'The list of OrderTour',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllOrder(@Query() query: any) {
    return this.orderTourService.getAllOrder(query);
  }

  @ApiOperation({ summary: 'Get a orderTour' })
  @ApiOkResponse({ status: 200, type: OrderTour, description: 'The orderTour' })
  @ApiBadRequestResponse({
    status: 404,
    description: 'The orderTour not found',
  })
  @Get('/:id')
  async getOrderById(@Param('id') id: string) {
    try {
      const orderTour = await this.orderTourService.getOrderById(id);
      if (!orderTour) throw new NotFoundException('OrderTour not found');
      return orderTour;
    } catch (error) {
      throw new NotFoundException('OrderTour not found');
    }
  }

  @ApiOperation({ summary: 'Create a new orderTour' })
  @ApiResponse({ status: 201, type: OrderTour, description: 'The orderTour' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createOrder(
    @Body()
    createOrderDto: CreateOrderTourDto,
  ) {
    try {
      const res = await this.orderTourService.createOrder(createOrderDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a orderTour' })
  @ApiResponse({ status: 200, type: OrderTour, description: 'The orderTour' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateOrder(
    @Param('id') id: string,
    @Body()
    updateOrderDto: UpdateOrderTourDto,
  ) {
    try {
      const res = await this.orderTourService.updateOrderById(
        id,
        updateOrderDto,
      );
      if (!res) throw new NotFoundException('OrderTour not found');
      return res;
    } catch (error) {
      throw new BadRequestException('OrderTour not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a orderTour' })
  @ApiResponse({ status: 204, description: 'The orderTour' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteOrder(@Param('id') id: string) {
    return this.orderTourService.deleteOrderById(id);
  }
}
