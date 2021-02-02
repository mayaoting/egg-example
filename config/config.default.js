/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611838170026_7740';

  // add your middleware config here

  // 增加配置中间件
  config.middleware = ['printdate','forbidip'];

  // 给中间件传参数
  config.printdate = {
    aaa:'aaaa'
  }
  config.forbidip = {
    forbidips:[
      '127.0.0.1',
      '192.168.0.104'
    ]
  }

  config.view = {
    defaultViewEngine:'nunjucks',
    mapping: {
      '.html':'nunjucks'
    }
  }

  config.api = "http://www.phonegap100.com"

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
