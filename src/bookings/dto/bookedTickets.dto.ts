import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class BookedTicketsDto {
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @IsString()
  public cinemaName: string;
}
