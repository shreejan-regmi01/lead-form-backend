import { Transform } from 'class-transformer';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class VehicleDto {
  @IsUUID()
  applicationId: string;

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
