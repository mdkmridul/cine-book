import * as mongoose from 'mongoose';

export const CinemaSchema = new mongoose.Schema(
  {
    name: String,
    totalSeats: Number,
    contact: String,
    seats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  },
  {
    timestamps: true,
  },
);
