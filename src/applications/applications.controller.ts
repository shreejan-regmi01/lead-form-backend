import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateApplicationDto } from './dto';
import { ApplicationsService } from './applications.service';
import { sumoLogger } from 'src/utils/logger';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Get()
  findAll(): string {
    return 'list of applications';
  }

  @Post()
  async create(@Body() appDto: CreateApplicationDto) {
    const application = await this.applicationsService.create(appDto);
    sumoLogger.log(`Application created with id: ${application.id}`, {
      tags: ['application', 'POST application'],
    });
    return application;
  }
}
