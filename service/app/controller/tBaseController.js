//app/controller/post.js
const Controller = require('../core/base_controller');
class PostController extends Controller {
  async index() {
    return this.notFound();
  }
}

module.exports = PostController;