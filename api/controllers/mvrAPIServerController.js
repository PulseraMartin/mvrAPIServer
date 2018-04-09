'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks'),
    DataPackage = mongoose.model('DataPackage');

// GET METHOD
exports.list_all_packages = function(req, res){
  DataPackage.find({}, function(err, data_package){
    if(err)
      res.send();
    res.json(data_package);
  });
};

// POST METHOD
exports.package_post = function(req, res) {
  console.log("REQUEST RECIBIDO 0: //////////// ");
  console.dir(req.body);
  var new_data_package = new DataPackage(req.body);
  console.log("REQUEST RECIBIDO: " + req.body);
  new_data_package.save(function(err, data_package) {
    if (err)
      res.send(err);
    res.json(data_package);
  });
};

// GET METHOD
exports.list_all_tasks = function(req, res){
  Task.find({}, function(err, task){
    if(err)
      res.send();
    res.json(task);
  });
};

//
// GET METHOD
exports.list_temperature = function(req, res){
  DataPackage.find({'sensor': 'temperature'}, function(err, task){
    if(err)
      res.send();
    res.json(task);
  }).
  limit(10).
  sort({ package_timestamp: -1 });
};

exports.list_accel = function(req, res){
  DataPackage.find({'sensor': 'accelerometer'}, function(err, task){
    if(err)
      res.send();
    res.json(task);
  }).
  limit(10).
  sort({ package_timestamp: -1 });
};

exports.list_gyro = function(req, res){
  DataPackage.find({'sensor': 'gyroscope'}, function(err, task){
    if(err)
      res.send();
    res.json(task);
  }).
  limit(10).
  sort({ package_timestamp: -1 });
};
//

// POST METHOD
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

// GET METHOD
exports.read_a_task = function(req, res){
  Task.findById(req.params.taskId, function(err, task){
    if(err)
      res.send(err);
    res.json(task);
  });
};

// PUT METHOD
exports.update_a_task = function(req, res){
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task){
    if(err)
      res.send(err);
    res.json(task);
  });
};

// // DELETE METHOD
// exports.deleta_a_task = function(req, res){
//
//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
//   // Task.remove({
//   //   _id: req.params.taskId},
//   //   function(err, task){
//   //     if(err)
//   //       res.send(err);
//   //     res.json({message: 'Task succesfully deleted'});
//   //   });
// };
