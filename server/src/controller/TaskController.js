const express = require('express')

const Task = require('../model/Task')

const router = express.Router();

router.post('/task', async (req, res) => {
    try {
        const newTask = Task.create(req.body)

        return res.send({ newTask });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao Cadastrar novas tarefas' })
    }
})

module.export = app => app.use('/v1', router);