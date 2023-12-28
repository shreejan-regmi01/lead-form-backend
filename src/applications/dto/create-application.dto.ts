import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  // ValidateNested,
} from 'class-validator';
// import { VehicleDto } from '../../vehicles/dto/vehicle.dto';

enum Term {
  OneYear = '1 year',
  TwoYears = '2 years',
  ThreeYears = '3 years',
  FourYears = '4 years',
  FiveYears = '5 years',
}

export class CreateApplicationDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  purchasePrice: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  deposit: number;

  @IsEnum(Term)
  term: Term;

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

  //https://stackoverflow.com/questions/53650528/validate-nested-objects-using-class-validator-in-nest-js-controller/53685045#53685045
  // @ValidateNested()
  // @Type(() => VehicleDto)
  // vehicle: VehicleDto;
}
