import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateApplicationDto } from './dto';
import { ApplicationsService } from './applications.service';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Get()
  findAll(): string {
    return 'list of applications';
  }

  @Post()
  create(@Body() appDto: CreateApplicationDto) {
    return this.applicationsService.create(appDto);
  }
}
