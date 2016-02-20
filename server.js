import express from 'express';
import path from 'path';
import compression from 'compression';
import { minify } from 'html-minifier';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import store from './store.js';
import Helmet from 'react-helmet';

export const app = express();



app.use(compression())

app.use(express.static(path.join(__dirname, 'public'), {index: false}));

app.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirect, props) => {

        if (err) {
            res.status(500).send(err.message)

        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)

        } else if (props) {

            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...props} />
                </Provider>
            );

            let head = Helmet.rewind();

            res.send(buildPage(html, head))
        } else {
            res.status(404).send('Not Found')
        }
    })
});

function buildPage(innerHTML, head) {
    let template = `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8" />
                ${head.title}
                ${head.meta}
                ${head.link}
                <link href=/style.css rel=stylesheet>
            </head>
            <body>
                <div id="app">${innerHTML}</div>
                <script type=text/javascript src=/bundle.js charset=utf-8></script>
            </body>
        </html>
    `;

    return minify(template, {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true
    });
}


var PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Running on port ' + PORT)); // eslint-disable-line
