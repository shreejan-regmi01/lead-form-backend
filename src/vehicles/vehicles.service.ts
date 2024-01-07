import { Injectable } from '@nestjs/common';
import { Vehicle } from './vehicle.model';
import { InjectModel } from '@nestjs/sequelize';
import { VehicleDto } from './dto/vehicle.dto';
import { MyLogger } from 'src/logger/logger.service';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle) private vehicleModel: typeof Vehicle,
    private logger: MyLogger,
  ) {}

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
