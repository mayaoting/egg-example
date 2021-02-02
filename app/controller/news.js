'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    const list = await this.service.news.getNewsList()
    var message = 'news list'
    await this.ctx.render('news.html',{message,list})
    // this.ctx.body = 'news message'
  }
  async content() {

    /**
     * 获取 get传值
     * 
     * koa 中获取get 传值  ctx.query 
     * 
     * egg.js中获取 get 传值 ctx.query
     */
    let aid = this.ctx.query.aid
    const list = await this.service.news.getNewsContent(aid)
    // const list = listArray[0]
    console.log(list)
    let len = list[0].content.length;
    console.log(len)
    const content = list[0].content.slice(0,len)
    await this.ctx.render('newscontent.html',
    {title:list[0].title,
    content:content})
  }

  /**
   * 获取动态路由
   */

   async newslist() {
       let message  = "news list"
       const list = await this.service.news.getNewsList()
       await this.ctx.render('news.html',{
           message,
           list
       })
    // this.ctx.body='new list'
   }
}

module.exports = NewsController;
