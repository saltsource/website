import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App.js';
import Home from './containers/Home/Home.js';
import About from './containers/About/About.js';
import Services from './containers/Services/Services.js';

const routes = (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
    </Route>
);

export default routes;
