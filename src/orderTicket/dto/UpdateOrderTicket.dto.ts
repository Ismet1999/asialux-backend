import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOrderTicketDto {
  // orderId: string;
  // ticketId: string;
  // ticketDestination: string;
  // flightDate: Date;

  @ApiProperty({
    example: '1',
    description: 'order id',
  })
  @IsOptional()
  @IsString({ message: 'order id must be a valid string' })
  orderId: string;

  @ApiProperty({
    example: '1',
    description: 'ticket id',
  })
  @IsOptional()
  @IsString({ message: 'ticket id must be a valid string' })
  ticketId: string;

  @ApiProperty({
    example: '1',
    description: 'ticket destination',
  })
  @IsOptional()
  @IsString({ message: 'ticket destination must be a valid string' })
  ticketDestination: string;

  @ApiProperty({
    example: '2021-09-01',
    description: 'flight date',
  })
  @IsOptional()
  @IsDateString(
    { strict: true },
    { message: 'flight date must be a valid date (YYYY-MM-DD )' },
  )
  flightDate: Date;
}
