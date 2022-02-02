const express = require('express')

const Task = require('../model/task')

const router = express.Router();

router.post('/task', async (req, res) => {
    try {
        console.log(await req.body)
        const newTask = await Task.create(req.body)

        return res.send({ newTask }).status(200);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao cadastrar novas tarefas' })
    }
})

router.get('/task', async (req, res) => {
    try {
        Task.find({}, function(err, tasks) {
            var taskList = {};
        
            tasks.forEach(function(task) {
                taskList[task._id] = task;
            });
        
            res.send(taskList);  
        });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar tarefas' })
    }
})

module.exports = app => app.use('/v1', router);