'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async echo() {
    console.log({'name':"qiqi"})
  }
}

module.exports = AdminService;

