// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportForbidip = require('../../../app/middleware/forbidip');
import ExportPrintdate = require('../../../app/middleware/printdate');

declare module 'egg' {
  interface IMiddleware {
    forbidip: typeof ExportForbidip;
    printdate: typeof ExportPrintdate;
  }
}
