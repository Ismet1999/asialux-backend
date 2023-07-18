import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTicketDto {
  // orderTourId: string;
  // ticketId: string;
  // clientId: string;
  // orderTicketId: string;

  @ApiProperty({
    example: 'orderTourId',
    description: 'OrderTour id',
  })
  @IsOptional()
  @IsString({ message: 'orderTourId must be a valid string' })
  orderTourId: string;

  @ApiProperty({
    example: 'ticketId',
    description: 'Ticket id',
  })
  @IsOptional()
  @IsString({ message: 'ticketId must be a valid string' })
  ticketId: string;

  @ApiProperty({
    example: 'clientId',
    description: 'Client id',
  })
  @IsOptional()
  @IsString({ message: 'clientId must be a valid string' })
  clientId: string;

  @ApiProperty({
    example: 'orderTicketId',
    description: 'OrderTicket id',
  })
  @IsOptional()
  @IsString({ message: 'orderTicketId must be a valid string' })
  orderTicketId: string;
}
