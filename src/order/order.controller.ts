import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  MaxFileSizeValidator,
  NotFoundException,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Query,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
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
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { OrderService } from './order.service';
import { SETTINGS } from 'src/app.utils';
import { Order } from './order.entity';
import { UpdateOrderDto } from './dto/UpdateOrder.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FindOrderDto } from './dto/FindOrder.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { ROLES } from 'src/user/user.utils';
import { ReqData } from 'src/auth/auth.type';
import { CreateTourOrderDto } from './dto/CreateTourOrder.dto';
import { OrderType } from './order.utils';
import { OrderTourService } from 'src/orderTour/orderTour.service';
import { CreateOrderTourDto } from 'src/orderTour/dto/CreateOrderTour.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly orderTourService: OrderTourService,
  ) {}
  @ApiOperation({ summary: 'Get all Order' })
  @ApiResponse({
    status: 200,
    type: [Order],
    description: 'The list of Order',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllOrder(@Query() query: FindOrderDto) {
    return this.orderService.getAllOrder(query);
  }

  @ApiOperation({ summary: 'Get a order' })
  @ApiOkResponse({ status: 200, type: Order, description: 'The order' })
  @ApiBadRequestResponse({ status: 404, description: 'The order not found' })
  @Get('/:id')
  async getOrderById(@Param('id') id: string) {
    try {
      const order = await this.orderService.getOrderById(id);
      if (!order) throw new NotFoundException('Order not found');
      return order;
    } catch (error) {
      throw new NotFoundException('Order not found');
    }
  }

  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({ status: 201, type: Order, description: 'The order' })
  @ApiBearerAuth()
  @Roles(ROLES.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createOrder(
    @Body()
    createOrderDto: CreateOrderDto,
    @Request() req: ReqData,
  ) {
    try {
      const res = await this.orderService.createOrder(createOrderDto, req.user);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Create a new tour order' })
  @ApiResponse({ status: 201, type: Order, description: 'The tour order' })
  @ApiBearerAuth()
  @Roles(ROLES.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/tour')
  async createTourOrder(
    @Body()
    createTourOrderDto: CreateTourOrderDto,
    @Request() req: ReqData,
  ) {
    try {
      const orderDto: CreateOrderDto = {
        b2bPrice: createTourOrderDto.b2bPrice,
        b2cPrice: createTourOrderDto.b2cPrice,
        clientId: createTourOrderDto.clientId,
        type: OrderType.Tour,
      };
      const order = await this.orderService.createOrder(orderDto, req.user);
      const orderTourDto: CreateOrderTourDto = {
        orderId: order.id,
        tourId: createTourOrderDto.tourId,
        flightDate: createTourOrderDto.flightDate,
        ticketId: createTourOrderDto.ticketId,
        tourDestination: createTourOrderDto.tourDestination,
      };
      const orderTour = await this.orderTourService.createOrder(orderTourDto);
      const res = await this.orderService.getOrderById(order.id);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a order' })
  @ApiResponse({ status: 200, type: Order, description: 'The order' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateOrder(
    @Param('id') id: string,
    @Body()
    updateOrderDto: UpdateOrderDto,
  ) {
    try {
      const res = await this.orderService.updateOrderById(id, updateOrderDto);
      if (!res) throw new NotFoundException('Order not found');
      return res;
    } catch (error) {
      throw new BadRequestException('Order not updated' + error);
    }
  }

  @Post(':id/files')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: SETTINGS.STORAGE_FILE,
    }),
  )
  async uploadFile(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 10 })],
      }),
    )
    files: Express.Multer.File[],
  ) {
    try {
      await this.orderService.updateFileOrderById(id, {
        files: files.map((file) => file.path),
      });
    } catch (error) {
      throw new BadRequestException('Order not updated: ' + error.message);
    }
  }

  @ApiOperation({ summary: 'Delete a order' })
  @ApiResponse({ status: 204, description: 'The order' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteOrder(@Param('id') id: string) {
    return this.orderService.deleteOrderById(id);
  }
}
