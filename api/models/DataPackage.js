'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DatapackageSchema = new Schema({
  id: {type: String,required: 'Please enter the package ID'},
  user_id: {type: String,required: 'Please enter user ID'},
  package_timestamp: {type: Number, required: 'Please enter package timestamp'},
  // sensor: {type: [{type: String,enum: ['ppg','inertial','eda']}]},
  sensor: {type: [{type: String,enum: ['ppg','accelerometer','gyroscope','eda', 'temperature']}]},
  package_data: {type: String,default: 'NA'},
  Created_at: {type: Date,defauts: Date.now}
});

module.exports = mongoose.model('DataPackage',DatapackageSchema)
