import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BookSeatDto {
  @IsNotEmpty()
  @IsString()
  readonly cinema: string;

  @IsNotEmpty()
  @IsArray()
  readonly seatNumbers: number[];

  @IsString()
  @IsOptional()
  readonly bookedBy: string;
}
