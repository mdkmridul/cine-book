import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class BookSeatDto {
  @IsNotEmpty()
  @IsString()
  readonly cinema: string;

  @IsNotEmpty()
  @IsArray()
  readonly seatNumbers: number[];

  @IsString()
  readonly bookedBy: string;
}
