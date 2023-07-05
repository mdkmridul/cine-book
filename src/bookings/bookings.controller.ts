import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './schemas/booking.schema';
import { genericResponse } from 'src/constants/genric.type';
import { BookSeatDto } from './dto/bookSeat.dto';
import { BookedTicketsDto } from './dto/bookedTickets.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  async bookSeat(@Body() dto: BookSeatDto): Promise<
    genericResponse & {
      data: { bookings: Booking[] };
    }
  > {
    return await this.bookingsService.bookSeat(dto);
  }

  @Get('seats/booked/details')
  async getBookedTickets(@Query() query: BookedTicketsDto): Promise<
    genericResponse & {
      data: { bookings: Booking[] };
    }
  > {
    return await this.bookingsService.getBookedTickets(query.cinemaName);
  }

  @Get('seats')
  async seatsStatus(
    @Query() query: BookedTicketsDto,
  ): Promise<{ bookedSeats: number[]; seatsLeft: number[] }> {
    return await this.bookingsService.seatsStatus(query.cinemaName);
  }
}
