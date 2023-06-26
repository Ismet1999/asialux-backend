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
import { CreateOrderVisaDto } from './dto/CreateOrderVisa.dto';
import { OrderVisaService } from './orderVisa.service';
import { SETTINGS } from 'src/app.utils';
import { OrderVisa } from './orderVisa.entity';
import { UpdateOrderVisaDto } from './dto/UpdateOrderVisa.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('OrderVisa')
@Controller('order-visa')
export class OrderVisaController {
  constructor(private readonly orderVisaService: OrderVisaService) {}
  @ApiOperation({ summary: 'Get all OrderVisa' })
  @ApiResponse({
    status: 200,
    type: [OrderVisa],
    description: 'The list of OrderVisa',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllOrder(@Query() query: any) {
    return this.orderVisaService.getAllOrder(query);
  }

  @ApiOperation({ summary: 'Get a orderVisa' })
  @ApiOkResponse({ status: 200, type: OrderVisa, description: 'The orderVisa' })
  @ApiBadRequestResponse({
    status: 404,
    description: 'The orderVisa not found',
  })
  @Get('/:id')
  async getOrderById(@Param('id') id: string) {
    try {
      const orderVisa = await this.orderVisaService.getOrderById(id);
      if (!orderVisa) throw new NotFoundException('OrderVisa not found');
      return orderVisa;
    } catch (error) {
      throw new NotFoundException('OrderVisa not found');
    }
  }

  @ApiOperation({ summary: 'Create a new orderVisa' })
  @ApiResponse({ status: 201, type: OrderVisa, description: 'The orderVisa' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createOrder(
    @Body()
    createOrderDto: CreateOrderVisaDto,
  ) {
    try {
      const res = await this.orderVisaService.createOrder(createOrderDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a orderVisa' })
  @ApiResponse({ status: 200, type: OrderVisa, description: 'The orderVisa' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateOrder(
    @Param('id') id: string,
    @Body()
    updateOrderDto: UpdateOrderVisaDto,
  ) {
    try {
      const res = await this.orderVisaService.updateOrderById(
        id,
        updateOrderDto,
      );
      if (!res) throw new NotFoundException('OrderVisa not found');
      return res;
    } catch (error) {
      throw new BadRequestException('OrderVisa not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a orderVisa' })
  @ApiResponse({ status: 204, description: 'The orderVisa' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteOrder(@Param('id') id: string) {
    return this.orderVisaService.deleteOrderById(id);
  }
}
