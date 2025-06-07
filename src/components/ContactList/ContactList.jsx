import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const visibilityContacts = useSelector(selectFilteredContacts);

  return (
    <div className={styles.contactsContainer}>
      {visibilityContacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        visibilityContacts.map((number) => (
          <Contact key={number.id} numberInfo={number} />
        ))
      )}
    </div>
  );
}
