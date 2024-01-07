import { Injectable } from '@nestjs/common';
import { Vehicle } from './vehicle.model';
import { InjectModel } from '@nestjs/sequelize';
import { VehicleDto } from './dto/vehicle.dto';
import { sumoLogger } from 'src/utils/logger';

@Injectable()
export class VehiclesService {
  constructor(@InjectModel(Vehicle) private vehicleModel: typeof Vehicle) {}

  async create(dto: VehicleDto) {
    const vehicle = await this.vehicleModel.create({ ...dto });
    sumoLogger.log(
      `Vehicle created with id: ${vehicle.id} for Application id: ${dto.applicationId}`,
      {
        tags: ['vehicle', 'POST vehicle'],
      },
    );
    return vehicle;
  }
}
