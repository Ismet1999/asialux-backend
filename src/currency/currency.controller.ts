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
import { CreateCurrencyDto } from './dto/CreateCurrency.dto';
import { CurrencyService } from './currency.service';
import { SETTINGS } from 'src/app.utils';
import { Currency } from './currency.entity';
import { UpdateCurrencyDto } from './dto/UpdateCurrency.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Currency')
@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}
  @ApiOperation({ summary: 'Get all Currency' })
  @ApiResponse({
    status: 200,
    type: [Currency],
    description: 'The list of Currency',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllCurrency(@Query() query: any) {
    return this.currencyService.getAllCurrency(query);
  }

  @ApiOperation({ summary: 'Get a currency' })
  @ApiOkResponse({ status: 200, type: Currency, description: 'The currency' })
  @ApiBadRequestResponse({ status: 404, description: 'The currency not found' })
  @Get('/:id')
  async getCurrencyById(@Param('id') id: string) {
    try {
      const currency = await this.currencyService.getCurrencyById(id);
      if (!currency) throw new NotFoundException('Currency not found');
      return currency;
    } catch (error) {
      throw new NotFoundException('Currency not found');
    }
  }

  @ApiOperation({ summary: 'Create a new currency' })
  @ApiResponse({ status: 201, type: Currency, description: 'The currency' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createCurrency(
    @Body(SETTINGS.VALIDATION_PIPE)
    createCurrencyDto: CreateCurrencyDto,
  ) {
    try {
      const res = await this.currencyService.createCurrency(createCurrencyDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a currency' })
  @ApiResponse({ status: 200, type: Currency, description: 'The currency' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateCurrency(
    @Param('id') id: string,
    @Body(SETTINGS.VALIDATION_PIPE)
    updateCurrencyDto: UpdateCurrencyDto,
  ) {
    try {
      const res = await this.currencyService.updateCurrencyById(
        id,
        updateCurrencyDto,
      );
      if (!res) throw new NotFoundException('Currency not found');
      return res;
    } catch (error) {
      throw new BadRequestException('Currency not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a currency' })
  @ApiResponse({ status: 204, description: 'The currency' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteCurrency(@Param('id') id: string) {
    return this.currencyService.deleteCurrencyById(id);
  }
}
