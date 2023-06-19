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
import { CreateInvoiceDto } from './dto/CreateInvoice.dto';
import { InvoiceService } from './invoice.service';
import { SETTINGS } from 'src/app.utils';
import { Invoice } from './invoice.entity';
import { UpdateInvoiceDto } from './dto/UpdateInvoice.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}
  @ApiOperation({ summary: 'Get all Invoice' })
  @ApiResponse({
    status: 200,
    type: [Invoice],
    description: 'The list of Invoice',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllOrder(@Query() query: any) {
    return this.invoiceService.getAllOrder(query);
  }

  @ApiOperation({ summary: 'Get a invoice' })
  @ApiOkResponse({ status: 200, type: Invoice, description: 'The invoice' })
  @ApiBadRequestResponse({
    status: 404,
    description: 'The invoice not found',
  })
  @Get('/:id')
  async getOrderById(@Param('id') id: string) {
    try {
      const invoice = await this.invoiceService.getOrderById(id);
      if (!invoice) throw new NotFoundException('Invoice not found');
      return invoice;
    } catch (error) {
      throw new NotFoundException('Invoice not found');
    }
  }

  @ApiOperation({ summary: 'Create a new invoice' })
  @ApiResponse({ status: 201, type: Invoice, description: 'The invoice' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createOrder(
    @Body(SETTINGS.VALIDATION_PIPE)
    createOrderDto: CreateInvoiceDto,
  ) {
    try {
      const res = await this.invoiceService.createOrder(createOrderDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a invoice' })
  @ApiResponse({ status: 200, type: Invoice, description: 'The invoice' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateOrder(
    @Param('id') id: string,
    @Body(SETTINGS.VALIDATION_PIPE)
    updateOrderDto: UpdateInvoiceDto,
  ) {
    try {
      const res = await this.invoiceService.updateOrderById(id, updateOrderDto);
      if (!res) throw new NotFoundException('Invoice not found');
      return res;
    } catch (error) {
      throw new BadRequestException('Invoice not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a invoice' })
  @ApiResponse({ status: 204, description: 'The invoice' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteOrder(@Param('id') id: string) {
    return this.invoiceService.deleteOrderById(id);
  }
}
