import style from './SiteHeader.css';
import SiteNav from '../SiteNav/SiteNav.js';
import classNames from 'classnames';
import { IndexLink } from 'react-router';

export default ({className=""}) => (
    <header className={classNames(style.header, className)}>
        <IndexLink to="/" className={style.brand} activeClassName={style['brand--active']}>Salt Source</IndexLink>
        <SiteNav className={style.nav} />
    </header>
);
