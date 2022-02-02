const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./controller/TaskController')(app);


app.listen(5000,() => {
    console.log("Node app is running on port 5000");
});