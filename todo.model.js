const mongoose = require('mongoose')

const ToDoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  },
  doneDate: {
    type: Date,
    required: false
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  deleted: {
    type: Boolean,
    default: false,
    required: true
  },
  deletedAt: {
    type: Date,
    required: false
  }
})

module.exports = mongoose.model('ToDo', ToDoSchema)
