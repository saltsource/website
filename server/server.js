import express from 'express';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';
import setResponseCache from './lib/set-response-cache.js';
import reactHandler from './lib/react-handler.js';

export const app = express();

app.set('port', process.env.PORT || 8080);

// middleware
app.use( compression() );
app.use( helmet() );
app.use(express.static(path.join(__dirname, '..', 'public'), {
    index: false,
    maxAge: 1000*60*60
}));
app.use( setResponseCache() );

// route handlers
app.get('*', reactHandler);

// listen for once, ok?
app.listen(app.get('port'),
    () => console.log('Running on port ' + app.get('port')) // eslint-disable-line
);
