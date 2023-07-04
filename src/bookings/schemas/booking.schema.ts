import * as mongoose from 'mongoose';

export type Booking = {
  id: string;
  seatNumber: number;
  bookedBy: string;
  cinema: string;
};

export const BookingSchema = new mongoose.Schema({
  seatNumber: Number,
  bookedBy: String,
  cinema: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema' },
});
