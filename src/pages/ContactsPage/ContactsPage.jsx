import Container from '../../components/Container/Container';
import AppBar from '../../components/AppBar/AppBar';
import ParticlesComponent from '../../components/ParticlesComponent/ParticlesComponent';
import { RxHamburgerMenu } from 'react-icons/rx';
import ContactList from '../../components/ContactList/ContactList';
import ContactMenu from '../../components/ContactMenu/ContactMenu';
import SearchBox from '../../components/SearchBox/SearchBox';
import styles from './ContactsPage.module.css';
import GalleryViewSelect from '../../components/GalleryViewSelect/GalleryViewSelect';
import { openMenu } from '../../redux/contactsMenu/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpenMenu } from '../../redux/contactsMenu/selectors';
import { selectIsGalleryOpen } from '../../redux/galleryViewSelect/selectors';
import clsx from 'clsx';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectIsOpenMenu);
  const galleryMenuIsOpen = useSelector(selectIsGalleryOpen);
  const activeStyleSearchBox = clsx(
    galleryMenuIsOpen && styles.galleryIsOpen,
    styles.searchIconWraper,
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ParticlesComponent />
      <AppBar />
      <Container
        stylePage={{ width: '90vw', height: '80vh' }}
        styleWrapper={{ width: '100%', height: '100%' }}
      >
        {!menuIsOpen && (
          <button
            className={styles.burgerMenu}
            onClick={() => dispatch(openMenu())}
          >
            <RxHamburgerMenu className={styles.menuIcon} />
          </button>
        )}
        {menuIsOpen && <ContactMenu />}
        <div className={activeStyleSearchBox}>
          <SearchBox />
        </div>
        <ContactList typePage={'contactPage'} />
        <div className={styles.viewIconWraper}>
          <GalleryViewSelect />
        </div>
      </Container>
    </>
  );
}
