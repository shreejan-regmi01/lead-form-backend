import { Injectable } from '@nestjs/common';
import { Vehicle } from './vehicle.model';
import { InjectModel } from '@nestjs/sequelize';
import { VehicleDto } from './dto/vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(@InjectModel(Vehicle) private vehicleModel: typeof Vehicle) {}

  async create(dto: VehicleDto) {
    const vehicle = await this.vehicleModel.create({ ...dto });
    return vehicle;
  }
}
