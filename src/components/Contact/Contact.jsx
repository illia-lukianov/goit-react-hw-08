import { useDispatch, useSelector } from 'react-redux';
import ListStyle from './ContactList.module.css';
import GridStyle from './ContactGrid.module.css';
import ListStyleEditPage from './ContactListEditPage.module.css';
import GridStyleEditPage from './ContactGridEditPage.module.css';
import { IoIosContact } from 'react-icons/io';
import { PiPhoneCallBold } from 'react-icons/pi';
import { deleteContact } from '../../redux/contacts/operations';
import { selectGalleryView } from '../../redux/galleryViewSelect/selectors';

export default function Contact({
  typePage,
  numberInfo: { name, number, id },
}) {
  const dispatch = useDispatch();
  const deleteItem = (id) => dispatch(deleteContact(id));
  const galleryView = useSelector(selectGalleryView);

  const activeStyle =
    typePage === 'editPage'
      ? galleryView === 'list'
        ? ListStyleEditPage
        : GridStyleEditPage
      : galleryView === 'list'
      ? ListStyle
      : GridStyle;

  return (
    <div className={activeStyle.contactWrapper}>
      <div
        className={activeStyle.contact}
        id={id}
        onClick={
          typePage === 'editPage'
            ? (event) => console.log(event.currentTarget.id)
            : undefined
        }
      >
        <div className={activeStyle.contactInfo}>
          <IoIosContact className={activeStyle.contactIcon} />
          <p className={activeStyle.contactText}>{name}</p>
          <PiPhoneCallBold
            className={`${activeStyle.contactIcon} ${activeStyle.contactNumberIcon}`}
          />
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
