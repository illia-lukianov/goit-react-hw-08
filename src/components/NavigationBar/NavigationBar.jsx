import { useDispatch, useSelector } from 'react-redux';
import styles from './NavigationBar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectName } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import clsx from 'clsx';

export default function NavigationBar() {
  const dispatch = useDispatch();
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectName);

  const getActiveLinkClass = ({ isActive }) => {
    return clsx(styles.navLink, isActive && styles.activeLink);
  };

  return (
    <>
      <div className={styles.navLinkList}>
        <NavLink className={getActiveLinkClass} to={'/'}>
          Home
        </NavLink>

        {IsLoggedIn && (
          <NavLink className={getActiveLinkClass} to={'/contacts'}>
            Contacts
          </NavLink>
        )}

        {IsLoggedIn ? (
          <div className={styles.welcomedNotifyWrapper}>
            <p className={styles.welcomedNotify}>Hi dear {username}</p>
            <button
              className={styles.logOutBtn}
              onClick={() => dispatch(logOut())}
            >
              Log out
            </button>
          </div>
        ) : (
          <div className={styles.authLinkWrapper}>
            <Link className={styles.link} to={'/login'}>
              Login
            </Link>
            <Link className={styles.link} to={'/register'}>
              Register
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
