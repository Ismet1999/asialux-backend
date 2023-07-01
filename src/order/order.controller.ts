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
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @ApiOperation({ summary: 'Get all Order' })
  @ApiResponse({
    status: 200,
    type: [Order],
    description: 'The list of Order',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllOrder(@Query() query: any) {
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
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createOrder(
    @Body()
    createOrderDto: CreateOrderDto,
  ) {
    try {
      const res = await this.orderService.createOrder(createOrderDto);
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
    FilesInterceptor('files', 5, {
      storage: SETTINGS.STORAGE_FILE,
    }),
  )
  async uploadFile(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 1000000 })],
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
