const express = require('express');
const app = express();
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler.js');

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Express!');
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