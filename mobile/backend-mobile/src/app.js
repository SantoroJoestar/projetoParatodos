require('dotenv').config();
const app = require('./server');
const cors = require('cors');
const ApiController = require('./controllers/ApiController');
const AppController = require('./controllers/AppController');

app.use(cors());

app.use('/api', ApiController);
app.use('/app', AppController);