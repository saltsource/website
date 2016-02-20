import express from 'express';
import path from 'path';
import compression from 'compression';
import reactHandler from './lib/react-handler.js';

export const app = express();

app.set('port', process.env.PORT || 8080);

// middleware
app.use( compression() )

// statics
app.use(express.static(path.join(__dirname, '..', 'public'), {index: false}));

// route handlers
app.get('*', reactHandler);

// listen for once, ok?
app.listen(app.get('port'),
    () => console.log('Running on port ' + app.get('port')) // eslint-disable-line
);
