import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';
import store from '../../store.js';
import routes from '../../routes.js';
import renderPage from './render-page.js';


export default (req, res) => {
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

            res.send(renderPage(html, Helmet.rewind()));
        } else {
            res.status(404).send('Not Found')
        }
    })
}
