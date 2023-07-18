import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderTicketDto {
  // orderId: string;
  // ticketId: string;
  // ticketDestination: string;
  // flightDate: Date;

  @ApiProperty({
    example: '1',
    description: 'order id',
  })
  @IsNotEmpty({ message: 'order id is required' })
  @IsString({ message: 'order id must be a valid string' })
  orderId: string;

  @ApiProperty({
    example: '1',
    description: 'ticket id',
  })
  @IsNotEmpty({ message: 'ticket id is required' })
  @IsString({ message: 'ticket id must be a valid string' })
  ticketId: string;

  @ApiProperty({
    example: '1',
    description: 'ticket destination',
  })
  @IsNotEmpty({ message: 'ticket destination is required' })
  @IsString({ message: 'ticket destination must be a valid string' })
  ticketDestination: string;

  @ApiProperty({
    example: '2021-09-01',
    description: 'flight date',
  })
  @IsNotEmpty({ message: 'flight date is required' })
  @IsDateString(
    { strict: true },
    { message: 'flight date must be a valid date (YYYY-MM-DD )' },
  )
  flightDate: Date;
}
