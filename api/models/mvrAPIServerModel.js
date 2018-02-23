'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter a task'
  },
  Created_at: {
    type: Date,
    defauts: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending','ongoing','completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks',TaskSchema);
