import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
  seatNumber: Number,
  bookedBy: String,
  cinema: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema' },
});
