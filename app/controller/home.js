'use strict';

const Controller = require('egg').Controller;

/**
 * egg 是一个mvc的框架
 * 
 * MVC
 * view     视图 模版 页面的展示
 * 
 * Controller 控制器   负责处理一些业务逻辑
 * 
 * model  模型(service ) 和数据打交道 （查询数据库 请求数据）
 * 
 * middleware 路由加载前后的处理
 */

class HomeController extends Controller {
  async index() {

    this.ctx.body = '框架扩展'
    // this.app => application 对象
    this.ctx.app.foo()

    console.log('----------')
    this.ctx.request.foo();
  }
}

module.exports = HomeController;
