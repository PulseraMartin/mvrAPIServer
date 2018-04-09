'use strict';
module.exports = function(app){
  var mvrAPIServerController = require('../controllers/mvrAPIServerController');
  // mvrServer Routes

  app.route('/tasks')
  .get(mvrAPIServerController.list_all_tasks)
  .post(mvrAPIServerController.create_a_task);

  app.route('/packageRecord')
  .get(mvrAPIServerController.list_all_packages)
  .post(mvrAPIServerController.package_post);

  app.route('/getTemperatureRecord')
  .get(mvrAPIServerController.list_temperature);

  app.route('/getAccelRecord')
  .get(mvrAPIServerController.list_accel);

  app.route('/getGytoRecord')
  .get(mvrAPIServerController.list_gyro);

  app.route('/tasks/:taskId')
  .get(mvrAPIServerController.read_a_task)
  .put(mvrAPIServerController.update_a_task);
  // .delete(mvrAPIServerController.delete_a_task);

};
