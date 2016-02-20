import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App.js';
import Home from './containers/Home/Home.js';
import About from './containers/About/About.js';

const routes = (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
    </Route>
);

export default routes;
