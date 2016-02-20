import styles from './SiteFooter.css';
import classNames from 'classnames';
import img from './bcsalt.gif';

export default ({className}) => (
    <footer className={classNames(styles.footer, className)}>
        <img className={styles.img} src={img} />
    </footer>
);
