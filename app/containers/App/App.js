import { connect } from 'react-redux';
import SiteHeader from '../../components/SiteHeader/SiteHeader.js';
import SiteFooter from '../../components/SiteFooter/SiteFooter.js';
import 'normalize.css';
import './theme.css';
import styles from './App.scss';


const App = ({children}) => (
    <div className={styles.app}>

        <SiteHeader className={styles.header} />

        <div className={styles.content}>
            <main className={styles.main}>{children}</main>
        </div>

        <SiteFooter className={styles.footer}  />
    </div>
);



export default connect( )(App);
