import { Link, IndexLink } from 'react-router';
import styles from './SiteNav.css';
import classNames from 'classnames';

export default ({className}) => (
    <nav className={classNames(styles.nav, className)}>
        <IndexLink
            to="/"
            className={styles.link}
            activeClassName={styles['link--active']}
        >
            Home
        </IndexLink>

        <Link
            to="/about"
            className={styles.link}
            activeClassName={styles['link--active']}
        >
            About
        </Link>
    </nav>
);
