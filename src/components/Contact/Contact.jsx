import { useDispatch, useSelector } from 'react-redux';
import ListStyle from './ContactList.module.css';
import GridStyle from './ContactGrid.module.css';
import { IoIosContact } from 'react-icons/io';
import { PiPhoneCallBold } from 'react-icons/pi';
import { deleteContact } from '../../redux/contacts/operations';
import { selectGalleryView } from '../../redux/galleryViewSelect/selectors';

export default function Contact({ numberInfo: { name, number, id } }) {
  const dispatch = useDispatch();
  const deleteItem = (id) => dispatch(deleteContact(id));
  const galleryView = useSelector(selectGalleryView);
  const activeStyle = galleryView === 'list' ? ListStyle : GridStyle;

  return (
    <div className={activeStyle.contactWrapper}>
      <div className={activeStyle.contact}>
        <div className={activeStyle.contactInfo}>
          <IoIosContact className={activeStyle.contactNameIcon} />
          <p className={activeStyle.contactText}>{name}</p>
          <PiPhoneCallBold className={activeStyle.contactNumberIcon} />
          <p className={activeStyle.contactText}>{number}</p>
        </div>
        <button
          className={activeStyle.deleteButton}
          onClick={() => deleteItem(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
