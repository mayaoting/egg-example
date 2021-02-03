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


 /**
  * cookie  可以做到在同一个域内在不同的页面的数据共享，
  * 实现数据的持久化，
  * 
  * ctx.cookie 
  */

/**
 * session  在cookie的基础上封装的 session 主要用来做 用户身份识别
 */

class HomeController extends Controller {
  async index() {

    this.ctx.body = '框架扩展'
    // this.app => application 对象
    this.ctx.app.foo()

    console.log('----------')
    this.ctx.request.foo();

    // 设置加密的cookie 需要第三个参数 
    this.ctx.cookies.set('username','maqiqi', {
      maxAge: 1000*3600*14,
      signed:true,
      encrypt:true
    })

    this.ctx.session.userId = 'this is a user id'
  }
}

module.exports = HomeController;
