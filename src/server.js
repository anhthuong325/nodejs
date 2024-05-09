require('dotenv').config();

const express = require('express');

const configViewEngine = require('./config/viewsEngine');
const webRoutes = require('./routes/web');

// config server
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

// khai bao routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})