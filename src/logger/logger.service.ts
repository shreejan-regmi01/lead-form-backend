import { LoggerService } from '@nestjs/common';
import { SumoLoggerOptions } from 'sumo-logger';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SumoLogger = require('sumo-logger');
const opts: SumoLoggerOptions = {
  endpoint:
    'https://collectors.in.sumologic.com/receiver/v1/http/ZaVnC4dhaV1HftarwVhBB2CFVm1CeDMTqVGlLEYADAf-EIdLhTFKeWduak_AD_B1H71PAUeezY7rC8sILGTWutNf4bTrWF_AP9zx-wUwpRAa0osIL_R1nQ==',
  sendErrors: true,
  sessionKey: '9a9731e5-7344-4454-a739-fe998b82daf9', // generate a GUID
  sourceName: 'demo backend',
  sourceCategory: 'application module',
  hostName: 'localhost',
  // graphite: true, // Enable graphite metrics
};
const sumoLogger = new SumoLogger(opts);

export class MyLogger implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, data: any) {
    sumoLogger.log(message, { ...data, type: 'log' });
  }

  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, data: any) {
    sumoLogger.log(message, { ...data, type: 'fatal' });
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, data: any) {
    sumoLogger.log(message, { ...data, type: 'error' });
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, data: any) {
    sumoLogger.log(message, { ...data, type: 'warn' });
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, data: any) {
    sumoLogger.log(message, { ...data, type: 'debug' });
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, data: any) {
    sumoLogger.log(message, { ...data, type: 'verbose' });
  }
}
