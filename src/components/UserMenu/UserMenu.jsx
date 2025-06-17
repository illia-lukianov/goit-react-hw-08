import { useDispatch, useSelector } from 'react-redux';
import styles from './UserMenu.module.css';
import { selectName } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const username = useSelector(selectName);

  return (
    <div className={styles.welcomedNotifyWrapper}>
      <p className={styles.welcomedNotify}>Hi dear {username}</p>
      <button className={styles.logOutBtn} onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
}
