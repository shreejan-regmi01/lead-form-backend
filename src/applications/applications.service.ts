import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { Application } from './application.model';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application) private applicationModel: typeof Application,
  ) {}

  async create(dto: CreateApplicationDto) {
    const application = await this.applicationModel.create({ ...dto });
    return application;
  }
}
