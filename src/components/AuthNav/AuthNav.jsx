import { Link } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={styles.authLinkWrapper}>
      <Link className={styles.link} to={'/login'}>
        Login
      </Link>
      <Link className={styles.link} to={'/register'}>
        Register
      </Link>
    </div>
  );
}
