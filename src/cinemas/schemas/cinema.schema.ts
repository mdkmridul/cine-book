import * as mongoose from 'mongoose';

export type Cinema = {
  id: string;
  name: string;
  totalSeats: number;
  contact?: string;
  seats: string[];
  createdAt: string;
  updatedAt: string;
};

export const CinemaSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, index: true },
    totalSeats: Number,
    contact: String,
    seats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  },
  {
    timestamps: true,
  },
);
