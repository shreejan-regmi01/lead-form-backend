import { Injectable, LoggerService, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SumoLoggerOptions } from 'sumo-logger';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SumoLogger = require('sumo-logger');

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger implements LoggerService {
  sumoLogger = null;
  constructor(private configService: ConfigService) {
    const opts: SumoLoggerOptions = {
      endpoint: this.configService.get('SUMOLOGIC_HTTP_SOURCE_ENDPOINT'),
      sendErrors: true,
      sessionKey: '9a9731e5-7344-4454-a739-fe998b82daf9', // generate a GUID
      sourceName: 'demo backend',
      sourceCategory: 'application module',
      hostName: this.configService.get('LOGGER_HOSTNAME'),
      // graphite: true, // Enable graphite metrics
    };
    this.sumoLogger = new SumoLogger(opts);
  }

  /**
   * Write a 'log' level log.
   */
  log(message: any, data?: any) {
    this.sumoLogger.log(message, { ...data, type: 'log' });
  }

  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, data: any) {
    this.sumoLogger.log(message, { ...data, type: 'fatal' });
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, data: any) {
    this.sumoLogger.log(message, { ...data, type: 'error' });
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, data: any) {
    this.sumoLogger.log(message, { ...data, type: 'warn' });
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, data: any) {
    this.sumoLogger.log(message, { ...data, type: 'debug' });
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, data: any) {
    this.sumoLogger.log(message, { ...data, type: 'verbose' });
  }
}
