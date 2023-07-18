import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseArrayPipe,
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
import { CreateClientDto } from './dto/CreateClient.dto';
import { ClientService } from './client.service';
import { SETTINGS } from 'src/app.utils';
import { Client } from './client.entity';
import { UpdateClientDto } from './dto/UpdateClient.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @ApiOperation({ summary: 'Get all Client' })
  @ApiResponse({
    status: 200,
    type: [Client],
    description: 'The list of Client',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllClient(@Query() query: any) {
    return this.clientService.getAllClient(query);
  }

  @ApiOperation({ summary: 'Get a client' })
  @ApiOkResponse({ status: 200, type: Client, description: 'The client' })
  @ApiBadRequestResponse({ status: 404, description: 'The client not found' })
  @Get('/:id')
  async getClientById(@Param('id') id: string) {
    try {
      const client = await this.clientService.getClientById(id);
      if (!client) throw new NotFoundException('Client not found');
      return client;
    } catch (error) {
      throw new NotFoundException('Client not found');
    }
  }

  @ApiOperation({ summary: 'Create a new client' })
  @ApiResponse({ status: 201, type: Client, description: 'The client' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createClient(
    @Body()
    createClientDto: CreateClientDto,
  ) {
    try {
      const res = await this.clientService.createClient(createClientDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @ApiOperation({ summary: 'Create a new many client' })
  @ApiResponse({
    status: 201,
    type: [Client],
    description: 'The client created',
  })
  @Post('/many')
  async createManyClient(
    @Body(new ParseArrayPipe({ items: CreateClientDto }))
    createClientDto: CreateClientDto[],
  ) {
    try {
      const res = await this.clientService.createManyClient(createClientDto);
      return res;
    } catch (error) {
      throw new BadRequestException('Clients not created:' + error.message);
    }
  }

  @ApiOperation({ summary: 'Update a client' })
  @ApiResponse({ status: 200, type: Client, description: 'The client' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateClient(
    @Param('id') id: string,
    @Body()
    updateClientDto: UpdateClientDto,
  ) {
    try {
      const res = await this.clientService.updateClientById(
        id,
        updateClientDto,
      );
      if (!res) throw new NotFoundException('Client not found');
      return res;
    } catch (error) {
      throw new BadRequestException('Client not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a client' })
  @ApiResponse({ status: 204, description: 'The client' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteClient(@Param('id') id: string) {
    return this.clientService.deleteClientById(id);
  }
}
