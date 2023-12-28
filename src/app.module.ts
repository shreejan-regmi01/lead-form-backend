import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsModule } from './applications/applications.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Application } from './applications/application.model';
import { VehiclesModule } from './vehicles/vehicles.module';
import { Vehicle } from './vehicles/vehicle.model';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
