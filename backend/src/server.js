require('dotenv').config();
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log('Listening on Port ' + port);
})