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
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553999942495_5706';

  // add your middleware config here
  config.middleware = ['printdate', 'forbidip'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // config/config.${env}.js
  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: '127.0.0.1',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'root',
  //     // 密码
  //     password: '123456',
  //     // 数据库名
  //     database: 'huchun_test',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };
  config.printdate={
    aaa:'aaaaaa',
    enable: false
  }
  config.forbidip={
    forbidips: [
      '10.2.8.145'
    ],
    enable: false
  }
  config.mongoose = {
    client: {
      url: 'mongodb://eggadmin:123456@127.0.0.1/huchun',
      options: {},
    },
  };
  config.cors = {
    origin: ['http://localhost:3000'],
    alloMethods: 'GET,POST',
    credentials: true
  }

  config.security = {
    domainWhiteList: ['http://localhost:3000'],
    csrf: {
      enable: false,
    },
  };

  //配置公共的api

  config.api='http://www.phonegap100.com/';

  return {
    ...config,
    ...userConfig,
  };
};