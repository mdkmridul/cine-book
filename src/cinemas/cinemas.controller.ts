import { Body, Controller, Post, Get } from '@nestjs/common';
import { CinemasService } from './cinemas.service';
import { Cinema } from './schemas/cinema.schema';
import { genericResponse } from 'src/constants/genric.type';
import { CreateCinemaDto } from './dto/createCinema.dto';

@Controller('cinemas')
export class CinemasController {
  constructor(private readonly cinemaService: CinemasService) {}

  @Post()
  async createCinema(@Body() dto: CreateCinemaDto): Promise<
    genericResponse & {
      data: { cinema: Cinema };
    }
  > {
    return await this.cinemaService.createCinema(dto);
  }

  @Get()
  async getAllCinemas(): Promise<
    genericResponse & {
      data: { cinemas: Cinema[] };
    }
  > {
    return await this.cinemaService.getAllCinema();
  }
}
