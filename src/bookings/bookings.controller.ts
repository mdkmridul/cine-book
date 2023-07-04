import { Body, Controller, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './schemas/booking.schema';
import { genericResponse } from 'src/constants/genric.type';
import { BookSeatDto } from './dto/bookSeat.dto';

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
}
