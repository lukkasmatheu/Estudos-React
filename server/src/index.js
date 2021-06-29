const express = require('express');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

require('./controller/TaskController')


app.listen(5000);