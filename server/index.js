import express from 'express';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';

// this module is built by npm script...
import reactHandler from './modules/react-server-app';

// create express app...
export const app = express();

// middleware
app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, '..', 'static'), {index: false}));

// handle routes via react...
app.get('*', reactHandler);

// handle any errors
app.use( (err, req, res, next) => { // eslint-disable-line
    res.status(err.status||500).send("Application Error");
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Running on port ' + PORT)); // eslint-disable-line
