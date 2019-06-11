'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, app } = this;
    let res = await ctx.service.user.getUserList();
    ctx.body = res;
  }
}

module.exports = UserController;