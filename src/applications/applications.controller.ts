import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateApplicationDto } from './dto';

@Controller('applications')
export class ApplicationsController {
  @Get()
  findAll(): string {
    return 'list of applications';
  }

  @Post()
  createApplication(@Body() appDto: CreateApplicationDto) {
    console.log(appDto);
    return appDto;
  }
}
