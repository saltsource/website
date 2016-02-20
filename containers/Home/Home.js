import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import meta from './meta.js';
// import style from './Home.css';

const Home = ({pageMeta}={}) => (

    <div>
        <Helmet {...(pageMeta||meta)}/>
        <h1>Welcome Home</h1>
        <p>If only we had some content...</p>
    </div>

);

export default connect()(Home);
