'use strict';

const Controller = require('egg').Controller;

class FormController extends Controller {
  async index() {

    
    await this.ctx.render('form.html')
  }
  async add() {
      /**
       * 获取数据（egg.js获取数据不需要配置中间件直接通过下面的方式获取）
       * this.ctx.request.body()
       * 
       * 获取 csrf的值
       * this.ctx.csrf
       */
      
       this.ctx.body = this.ctx.request.body;
      console.log(this.ctx.request.body);
      console.log(this.ctx.csrf);
  }
}

module.exports = FormController;
