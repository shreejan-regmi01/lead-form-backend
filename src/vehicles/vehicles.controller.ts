import { Body, Controller, Post } from '@nestjs/common';
import { VehicleDto } from './dto/vehicle.dto';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private vehiclesService: VehiclesService) {}

  @Post()
  create(@Body() vehicleDto: VehicleDto) {
    return this.vehiclesService.create(vehicleDto);
  }
}
