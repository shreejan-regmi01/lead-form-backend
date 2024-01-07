import { Injectable, Logger } from '@nestjs/common';
import { Vehicle } from './vehicle.model';
import { InjectModel } from '@nestjs/sequelize';
import { VehicleDto } from './dto/vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(@InjectModel(Vehicle) private vehicleModel: typeof Vehicle) {}

  private readonly logger = new Logger(VehiclesService.name);

  async create(dto: VehicleDto) {
    const vehicle = await this.vehicleModel.create({ ...dto });
    this.logger.log(
      `Vehicle created with id: ${vehicle.id} for Application id: ${dto.applicationId}`,
      {
        tags: ['vehicle', 'POST vehicle'],
      },
    );
    return vehicle;
  }
}
