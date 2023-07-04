import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cinema } from './schemas/cinema.schema';
import { genericResponse } from 'src/constants/genric.type';
import { CreateCinemaType } from './types/createCinema.type';

@Injectable()
export class CinemasService {
  constructor(
    @InjectModel('Cinema')
    private readonly cinemaModel: Model<Cinema>,
  ) {}

  async createCinema(payload: CreateCinemaType): Promise<
    genericResponse & {
      data: { cinema: Cinema };
    }
  > {
    let cinema = new this.cinemaModel(payload);

    cinema = await cinema.save();

    return {
      message: 'Cinema created successfully.',
      data: { cinema },
      success: true,
    };
  }

  async getAllCinema(): Promise<
    genericResponse & {
      data: { cinemas: Cinema[] };
    }
  > {
    const cinemas = await this.cinemaModel.find().exec();

    return {
      data: { cinemas },
      success: true,
    };
  }

  async getCinema(cinemaName: string): Promise<Cinema> {
    const cinema = await this.cinemaModel.findOne({ name: cinemaName });
    return cinema;
  }
}
