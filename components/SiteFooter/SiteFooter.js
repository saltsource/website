import styles from './SiteFooter.css';
import classNames from 'classnames';

export default ({className}) => (
    <footer className={classNames(styles.footer, className)}>
        Copyright (c) 2016 SaltSource All Rights Reserved.
    </footer>
);
