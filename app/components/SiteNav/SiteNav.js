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
            home
        </IndexLink>

        <Link
            to="/services"
            className={styles.link}
            activeClassName={styles['link--active']}
        >
            services
        </Link>

        <Link
            to="/about"
            className={styles.link}
            activeClassName={styles['link--active']}
        >
            about
        </Link>
    </nav>
);
