'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    let res = {};
    console.log(ctx.request.body)
    // let requestParams = ctx.request.body;
    ctx.returnBody(200, 0, '成功', {token: 'ppppppppppp'})
    // if (requestParams.username && requestParams.password) {
    //   ctx.returnBody(200, 0, '成功', {success: '111'})
    // }else {
    //   ctx.returnBody(200, -1, '失败', {fail: '222'})
    // }
    // var res = await app.mysql.select('user')
  }
}

module.exports = HomeController;
