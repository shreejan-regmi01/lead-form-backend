import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { Application } from './application.model';
import { MyLogger } from 'src/logger/logger.service';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application) private applicationModel: typeof Application,
    private logger: MyLogger,
  ) {}

  async create(dto: CreateApplicationDto) {
    const application = await this.applicationModel.create({ ...dto });
    this.logger.log(`Application created with id: ${application.id}`, {
      tags: ['application', 'POST application'],
    });
    return application;
  }
}
