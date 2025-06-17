import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const getActiveLinkClass = ({ isActive }) => {
    return clsx(styles.navLink, isActive && styles.activeLink);
  };

  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink className={getActiveLinkClass} to={'/'}>
        Home
      </NavLink>

      {IsLoggedIn && (
        <NavLink className={getActiveLinkClass} to={'/contacts'}>
          Contacts
        </NavLink>
      )}
    </>
  );
}
