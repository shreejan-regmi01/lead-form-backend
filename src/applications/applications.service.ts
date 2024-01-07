import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { Application } from './application.model';
import { sumoLogger } from 'src/utils/logger';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application) private applicationModel: typeof Application,
  ) {}

  async create(dto: CreateApplicationDto) {
    const application = await this.applicationModel.create({ ...dto });
    sumoLogger.log(`Application created with id: ${application.id}`, {
      tags: ['application', 'POST application'],
    });
    return application;
  }
}
