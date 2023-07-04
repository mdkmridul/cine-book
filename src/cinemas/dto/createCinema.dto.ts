import { IsMobilePhone, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCinemaDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly totalSeats: number;

  @IsString()
  @IsMobilePhone('en-IN')
  readonly contact: string;
}
