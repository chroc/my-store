const express = require('express');
const app = express();
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler.js');

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

app.get('/', (req, res) => {
    res.send('Hello Express - My Store!');
});

// Define routing
routerApi(app);

// Define middlewares after defining the routing!
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Start Server
app.listen(port, () => {
    console.log(`My Store running on port: ${port}`);
});