import { useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import { selectIsOpenMenu } from '../../redux/contactsMenu/selectors';
import clsx from 'clsx';

export default function ContactList({ typePage }) {
  const visibilityContacts = useSelector(selectFilteredContacts);
  const menuIsOpen = useSelector(selectIsOpenMenu);
  const activeClass = clsx(
    styles.contactsContainer,
    typePage !== 'editPage' && menuIsOpen && styles.menuOpen,
  );
  return (
    <div className={activeClass}>
      {typePage !== 'editPage' && visibilityContacts.length === 0 ? (
        <p className={styles.firstContactNotify}>Add your first contact</p>
      ) : (
        visibilityContacts.map((number) => (
          <Contact typePage={typePage} key={number.id} numberInfo={number} />
        ))
      )}
    </div>
  );
}
