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
import { CreateOrderTicketDto } from './dto/CreateOrderTicket.dto';
import { OrderTicketService } from './orderTicket.service';
import { SETTINGS } from 'src/app.utils';
import { OrderTicket } from './orderTicket.entity';
import { UpdateOrderTicketDto } from './dto/UpdateOrderTicket.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('OrderTicket')
@Controller('order-ticket')
export class OrderTicketController {
  constructor(private readonly orderTicketService: OrderTicketService) {}
  @ApiOperation({ summary: 'Get all OrderTicket' })
  @ApiResponse({
    status: 200,
    type: [OrderTicket],
    description: 'The list of OrderTicket',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllOrder(@Query() query: any) {
    return this.orderTicketService.getAllOrder(query);
  }

  @ApiOperation({ summary: 'Get a orderTicket' })
  @ApiOkResponse({
    status: 200,
    type: OrderTicket,
    description: 'The orderTicket',
  })
  @ApiBadRequestResponse({
    status: 404,
    description: 'The orderTicket not found',
  })
  @Get('/:id')
  async getOrderById(@Param('id') id: string) {
    try {
      const orderTicket = await this.orderTicketService.getOrderById(id);
      if (!orderTicket) throw new NotFoundException('OrderTicket not found');
      return orderTicket;
    } catch (error) {
      throw new NotFoundException('OrderTicket not found');
    }
  }

  @ApiOperation({ summary: 'Create a new orderTicket' })
  @ApiResponse({
    status: 201,
    type: OrderTicket,
    description: 'The orderTicket',
  })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createOrder(
    @Body(SETTINGS.VALIDATION_PIPE)
    createOrderDto: CreateOrderTicketDto,
  ) {
    try {
      const res = await this.orderTicketService.createOrder(createOrderDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a orderTicket' })
  @ApiResponse({
    status: 200,
    type: OrderTicket,
    description: 'The orderTicket',
  })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateOrder(
    @Param('id') id: string,
    @Body(SETTINGS.VALIDATION_PIPE)
    updateOrderDto: UpdateOrderTicketDto,
  ) {
    try {
      const res = await this.orderTicketService.updateOrderById(
        id,
        updateOrderDto,
      );
      if (!res) throw new NotFoundException('OrderTicket not found');
      return res;
    } catch (error) {
      throw new BadRequestException('OrderTicket not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a orderTicket' })
  @ApiResponse({ status: 204, description: 'The orderTicket' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteOrder(@Param('id') id: string) {
    return this.orderTicketService.deleteOrderById(id);
  }
}
