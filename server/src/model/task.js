const mongoose = require('../database/index')

const date = new Date().toLocaleDateString();

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        required: true
    },
    date: {
        type: String,
        default: date,
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;