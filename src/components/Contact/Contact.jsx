import styles from './Contact.module.css';
import { formatDistanceToNow } from 'date-fns';
import { PiPhoneCallBold } from 'react-icons/pi';
import { IoIosContact } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({
  numberInfo: { name, number, id, createdAt },
}) {
  const dispatch = useDispatch();
  const deleteItem = (id) => dispatch(deleteContact(id));

  return (
    <div className={styles.contact}>
      <p className={styles.dateCreated}>
        {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
      </p>
      <div className={styles.contactInfo}>
        <IoIosContact className={styles.contactNameIcon} />
        <p className={styles.contactText}>{name}</p>
        <PiPhoneCallBold className={styles.contactNumberIcon} />
        <p className={styles.contactText}>{number}</p>
      </div>
      <button className={styles.deleteButton} onClick={() => deleteItem(id)}>
        Delete
      </button>
    </div>
  );
}
