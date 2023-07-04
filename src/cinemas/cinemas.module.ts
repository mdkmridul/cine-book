import { Module } from '@nestjs/common';
import { CinemasController } from './cinemas.controller';
import { CinemasService } from './cinemas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingSchema } from 'src/bookings/schemas/booking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }]),
  ],
  controllers: [CinemasController],
  providers: [CinemasService],
})
export class CinemasModule {}
