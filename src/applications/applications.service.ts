import { Injectable, Logger } from '@nestjs/common';
import { CreateApplicationDto } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { Application } from './application.model';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application) private applicationModel: typeof Application,
  ) {}

  private readonly logger = new Logger(ApplicationsService.name);

  async create(dto: CreateApplicationDto) {
    const application = await this.applicationModel.create({ ...dto });
    this.logger.log(`Application created with id: ${application.id}`, {
      tags: ['application', 'POST application'],
    });
    return application;
  }
}
