import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import meta from './meta.js';
// import style from './About.css';

const Services = ({pageMeta}={}) => (
    <div>
        <Helmet {...(pageMeta||meta)} />
        <h1>Services</h1>
        <p>We do stuff</p>
    </div>
);

export default connect()(Services);
