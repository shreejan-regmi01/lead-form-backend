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
export const sumoLogger = new SumoLogger(opts);
