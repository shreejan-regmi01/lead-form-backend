import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class VehicleDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsString()
  modelType: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  year: number;
}
