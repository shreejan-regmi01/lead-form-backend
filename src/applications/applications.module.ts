import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Application } from './application.model';
import { ApplicationsService } from './applications.service';

@Module({
  imports: [SequelizeModule.forFeature([Application])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
