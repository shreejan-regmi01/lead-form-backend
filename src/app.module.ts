import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsModule } from './applications/applications.module';
import { Application } from './applications/application.model';
import { VehiclesModule } from './vehicles/vehicles.module';
import { Vehicle } from './vehicles/vehicle.model';
import { LoggerModule } from './logger/logger.module';

//https://stackoverflow.com/questions/60090082/sequelize-model-has-not-been-defined-when-relationship-across-multiple-databa
@Module({
  imports: [
    ApplicationsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'computer05',
      database: 'lead-db',
      models: [Application, Vehicle],
      synchronize: true,
      autoLoadModels: true,
    }),
    VehiclesModule,
    LoggerModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
