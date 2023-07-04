import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CinemaSchema } from 'src/cinemas/schemas/cinema.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cinema', schema: CinemaSchema }]),
  ],
  providers: [BookingsService],
  controllers: [BookingsController],
})
export class BookingsModule {}
