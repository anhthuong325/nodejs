require('dotenv').config();

const express = require('express');
const path = require('path');

const configViewEngine = require('./config/viewsEngine');
const webRoutes = require('./routes/web');

const env = path.join(process.cwd(), 'config', '.env');

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