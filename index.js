const express = require('express');
const app = express();
const cors = require('cors');
const routerApi = require('./routes');
const apiKey = require('./middlewares/authHandler.js');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler.js');
const { checkApiKey } = require('./middlewares/authHandler.js');

const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080', 'https://myapp.com'];
const options = {
    origin: (origin, callback) => {
        if (whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('not allowed'));
        }
    }
};
app.use(cors());

require('./utils/auth/index.js');

app.get('/', (req, res) => {
    res.send('Hello Express - My Store!');
});

// nueva ruta prueba auth middleware
app.get('/new-route', checkApiKey, (req, res) => {
    res.send('Hey! I am the new route auth');
});

// Define routing
routerApi(app);

// Define middlewares after defining the routing!
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Start Server
app.listen(port, () => {
    console.log(`My Store running on port: ${port}`);
});