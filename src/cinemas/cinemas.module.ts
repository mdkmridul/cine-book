import { Module } from '@nestjs/common';
import { CinemasController } from './cinemas.controller';
import { CinemasService } from './cinemas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CinemaSchema } from './schemas/cinema.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cinema', schema: CinemaSchema }]),
  ],
  controllers: [CinemasController],
  providers: [CinemasService],
  exports: [CinemasService],
})
export class CinemasModule {}
