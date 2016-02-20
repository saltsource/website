import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import meta from './meta.js';
// import style from './About.css';

const About = ({pageMeta}={}) => (
    <div>
        <Helmet {...(pageMeta||meta)} />
        <h1>About</h1>
        <p>Jared has nice abs</p>
        <p>Daniel has nice bikes</p>
        <p>Cory has nice hats</p>
        <p>Jason has nice hair</p>
    </div>
);

export default connect()(About);
