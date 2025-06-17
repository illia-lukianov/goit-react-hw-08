import { useSelector } from 'react-redux';
import styles from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

export default function AppBar() {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={styles.navLinkList}>
        <Navigation />
        {IsLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </>
  );
}
