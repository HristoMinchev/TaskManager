const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{type: String, required: true },
    info:{type:String},
    status: { type: String, enum: ['Backlog', 'In Progress', 'In Review', 'Completed'], required: true },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Board',
      required: true,
    },
})

module.exports = mongoose.model('Task', TaskSchema)