import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ParticlesComponent from '../../components/ParticlesComponent/ParticlesComponent';
import styles from './ContactsEditPage.module.css';
import { selectIsGalleryOpen } from '../../redux/galleryViewSelect/selectors';
import clsx from 'clsx';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import GalleryViewSelect from '../../components/GalleryViewSelect/GalleryViewSelect';
import { Link } from 'react-router-dom';

export default function ContactsEditPage() {
  const galleryMenuIsOpen = useSelector(selectIsGalleryOpen);
  const activeStyleSearchBox = clsx(
    galleryMenuIsOpen && styles.galleryIsOpen,
    styles.searchIconWraper,
  );

  return (
    <>
      <ParticlesComponent />
      <NavigationBar />
      <Container
        stylePage={{ width: '90vw', height: '80vh' }}
        styleWrapper={{ width: '100%', height: '100%' }}
      >
        <div className={styles.backBtnWrapper}>
          <Link to={'/contacts'} className={styles.backBtn}>
            Back to Contacts
          </Link>
        </div>
        <div className={`${styles.searchIconWraper} ${activeStyleSearchBox}`}>
          <SearchBox />
        </div>
        <p className={styles.editMsg}>Edit your contact</p>
        <ContactList typePage={'editPage'} />
        <div className={styles.viewIconWraper}>
          <GalleryViewSelect />
        </div>
      </Container>
    </>
  );
}
