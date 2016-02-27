import style from './SiteHeader.css';
import SiteNav from '../SiteNav/SiteNav.js';
import classNames from 'classnames';
import { IndexLink } from 'react-router';
import img from "./bcsalt.gif";

export default ({className=""}) => (
    <header className={classNames(style.header, className)}>
        <IndexLink to="/" className={style.brand} activeClassName={style['brand--active']}>
            <img className={style.img} src={img} alt="SaltSource" />
        </IndexLink>
        <SiteNav className={style.nav} />
    </header>
);
