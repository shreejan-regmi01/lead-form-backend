import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, ValidateNested } from 'class-validator';
import { VehicleDto } from './vehicle.dto';

export class CreateApplicationDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  purchasePrice: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  deposit: number;

  @IsString()
  term: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  balloon: number;

  @IsBoolean()
  hasCarInMind: boolean;

  @IsString()
  carCondition: string;

  @IsString()
  urgency: string;

  @IsString()
  usage: string;

  @ValidateNested()
  @Type(() => VehicleDto)
  vehicle: VehicleDto;
}
