const Service = require('egg').Service;

class UserService extends Service {
    async getUserList() {
        return await this.ctx.model.User.find({});
    }
}

module.exports = UserService;