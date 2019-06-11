'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth({ attr: 'this is router.js middleware' });
  router.post('/login', controller.home.index);
  router.post('/getToken', controller.getToken.index);
  router.get('/test', controller.test.index);
  router.get('/user', auth, controller.user.index);
  router.get('/testExtend', controller.testExtend.index);
  router.get('/tBaseController', controller.tBaseController.index);
};
