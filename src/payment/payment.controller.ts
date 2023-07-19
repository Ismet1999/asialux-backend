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
import { CreatePaymentDto } from './dto/CreatePayment.dto';
import { PaymentService } from './payment.service';
import { SETTINGS } from 'src/app.utils';
import { Payment } from './payment.entity';
import { UpdatePaymentDto } from './dto/UpdatePayment.dto';
import { FindPaymentDto } from './dto/FindPayment.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @ApiOperation({ summary: 'Get all Payment' })
  @ApiResponse({
    status: 200,
    type: [Payment],
    description: 'The list of Payment',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllPayment(@Query() query: FindPaymentDto) {
    return this.paymentService.getAllPayment(query);
  }

  @ApiOperation({ summary: 'Get a payment' })
  @ApiOkResponse({ status: 200, type: Payment, description: 'The payment' })
  @ApiBadRequestResponse({
    status: 404,
    description: 'The payment not found',
  })
  @Get('/:id')
  async getPaymentById(@Param('id') id: string) {
    try {
      const payment = await this.paymentService.getPaymentById(id);
      if (!payment) throw new NotFoundException('Payment not found');
      return payment;
    } catch (error) {
      throw new NotFoundException('Payment not found');
    }
  }

  @ApiOperation({ summary: 'Create a new payment' })
  @ApiResponse({ status: 201, type: Payment, description: 'The payment' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createPayment(
    @Body()
    createPaymentDto: CreatePaymentDto,
  ) {
    try {
      const res = await this.paymentService.createPayment(createPaymentDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a payment' })
  @ApiResponse({ status: 200, type: Payment, description: 'The payment' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updatePayment(
    @Param('id') id: string,
    @Body()
    updatePaymentDto: UpdatePaymentDto,
  ) {
    try {
      const res = await this.paymentService.updatePaymentById(id, updatePaymentDto);
      if (!res) throw new NotFoundException('Payment not found');
      return res;
    } catch (error) {
      throw new BadRequestException('Payment not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a payment' })
  @ApiResponse({ status: 204, description: 'The payment' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deletePayment(@Param('id') id: string) {
    return this.paymentService.deletePaymentById(id);
  }
}
