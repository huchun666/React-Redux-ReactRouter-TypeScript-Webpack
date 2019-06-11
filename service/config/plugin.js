'use strict';

// config/plugin.js
// exports.mysql = {
//   enable: true,
//   package: 'egg-mysql',
// };
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
exports.cors = {
  enable: true,
  package: 'egg-cors'
}
exports.security = {
  csrf: {
    // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
    enable: false
  },
}