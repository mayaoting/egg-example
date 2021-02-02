'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 获取新闻数据

    var api = this.config.api + '/appapi.php?a=getPortalList&catid=20&page=1'

    var response = await this.ctx.curl(api)


    var data = JSON.parse(response.data)

    /**
     * service 与 service 之间是 可以互相调用的
     * controller 是可以调用 service 的 但是 
     * controller 与 controller 之间不可以相互调用的
     */
    return data.result
  }

  async getNewsContent(aid) {
    console.log('-----',aid)
    var api = this.config.api + '/appapi.php?a=getPortalArticle&aid='+aid

    var response = await this.ctx.curl(api)


    var data = JSON.parse(response.data)

    return data.result
  }
}

module.exports = NewsService;
