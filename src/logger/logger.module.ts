import { Global, Module } from '@nestjs/common';
import { MyLogger } from './logger.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
