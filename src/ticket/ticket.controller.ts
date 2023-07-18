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
import { CreateTicketDto } from './dto/CreateTicket.dto';
import { TicketService } from './ticket.service';
import { SETTINGS } from 'src/app.utils';
import { Ticket } from './ticket.entity';
import { UpdateTicketDto } from './dto/UpdateTicket.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @ApiOperation({ summary: 'Get all Ticket' })
  @ApiResponse({
    status: 200,
    type: [Ticket],
    description: 'The list of Ticket',
  })
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  findAllTicket(@Query() query: any) {
    return this.ticketService.getAllTicket(query);
  }

  @ApiOperation({ summary: 'Get a ticket' })
  @ApiOkResponse({ status: 200, type: Ticket, description: 'The ticket' })
  @ApiBadRequestResponse({ status: 404, description: 'The ticket not found' })
  @Get('/:id')
  async getTicketById(@Param('id') id: string) {
    try {
      const ticket = await this.ticketService.getTicketById(id);
      if (!ticket) throw new NotFoundException('Ticket not found');
      return ticket;
    } catch (error) {
      throw new NotFoundException('Ticket not found');
    }
  }

  @ApiOperation({ summary: 'Create a new ticket' })
  @ApiResponse({ status: 201, type: Ticket, description: 'The ticket' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createTicket(
    @Body()
    createTicketDto: CreateTicketDto,
  ) {
    try {
      const res = await this.ticketService.createTicket(createTicketDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Create a new many ticket' })
  @ApiResponse({ status: 201, type: [Ticket], description: 'The tickets' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/many')
  async createManyTicket(
    @Body(new ParseArrayPipe({ items: CreateTicketDto }))
    createTicketDto: CreateTicketDto[],
  ) {
    try {
      const res = await this.ticketService.createManyTicket(createTicketDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Update a ticket' })
  @ApiResponse({ status: 200, type: Ticket, description: 'The ticket' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async updateTicket(
    @Param('id') id: string,
    @Body()
    updateTicketDto: UpdateTicketDto,
  ) {
    try {
      const res = await this.ticketService.updateTicketById(
        id,
        updateTicketDto,
      );
      if (!res) throw new NotFoundException('Ticket not found');
      return res;
    } catch (error) {
      throw new BadRequestException('Ticket not updated' + error);
    }
  }

  @ApiOperation({ summary: 'Delete a ticket' })
  @ApiResponse({ status: 204, description: 'The ticket' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteTicket(@Param('id') id: string) {
    return this.ticketService.deleteTicketById(id);
  }
}
