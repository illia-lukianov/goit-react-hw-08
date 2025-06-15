import ParticlesComponent from '../../components/ParticlesComponent/ParticlesComponent';
import styles from '../HomePage/HomePage.module.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import mainImage from '../../images/HomePage/MAinPage.webp';
import Container from '../../components/Container/Container';

export default function HomePage() {
  return (
    <>
      <ParticlesComponent />
      <NavigationBar />
      <Container>
        <p className={styles.informationText}>
          Hi dear user this is one centralised place for store your contacts!
        </p>
        <img src={mainImage} className={styles.contactsBookIcon}></img>
      </Container>
    </>
  );
}
