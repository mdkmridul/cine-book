import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from './schemas/booking.schema';
import { Model } from 'mongoose';
import { BookSeatType } from './types/bookSeat.type';
import { genericResponse } from 'src/constants/genric.type';
import { CinemasService } from 'src/cinemas/cinemas.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel('Booking')
    private readonly bookingModel: Model<Booking>,
    private readonly cinemasService: CinemasService,
  ) {}

  async bookSeat(payload: BookSeatType): Promise<
    genericResponse & {
      data: { bookings: Booking[] };
    }
  > {
    const cinema = await this.cinemasService.getCinema(payload.cinema);
    if (!cinema) {
      throw new HttpException('No cinema exist with this name', 400);
    }

    payload.seatNumbers.forEach((element: number) => {
      if (element > cinema.totalSeats) {
        throw new HttpException(`No such seat number exists: ${element}`, 400);
      }
    });

    const seats = await this.bookingModel.find({
      cinema: cinema.id,
      seatNumber: payload.seatNumbers,
    });

    const seatNumbers = [];

    seats.forEach((seat) => {
      seatNumbers.push(seat.seatNumber);
    });

    if (seats.length) {
      throw new HttpException(
        `These seats are already booked: ${seatNumbers.join(', ')}`,
        400,
      );
    }

    let newSeats = [];
    seatNumbers.forEach((ele) => {
      newSeats.push({
        seatNumber: ele,
        bookedBy: payload.bookedBy,
        cinema: cinema.id,
      });
    });

    newSeats = await this.bookingModel.insertMany(newSeats);

    return {
      message: 'Seats have been booked.',
      data: { bookings: newSeats },
      success: true,
    };
  }

  async bookedTickets(cinemaName: string): Promise<
    genericResponse & {
      data: { bookings: Booking[] };
    }
  > {
    const cinema = await this.cinemasService.getCinema(cinemaName);
    if (!cinema) {
      throw new HttpException('No cinema exist with this name', 400);
    }
    const bookings = await this.bookingModel.find({ cinema: cinema.id });

    return {
      message: 'Seats have been booked.',
      data: { bookings },
      success: true,
    };
  }
}
