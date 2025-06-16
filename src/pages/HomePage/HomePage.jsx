import ParticlesComponent from '../../components/ParticlesComponent/ParticlesComponent';
import styles from '../HomePage/HomePage.module.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import mainImage from '../../images/HomePage/MainPage.webp';
import Container from '../../components/Container/Container';
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
  return (
    <>
      <ParticlesComponent />
      <NavigationBar />
      <Container>
        <p className={styles.informationText}>
          Hi dear user this is one centralised place for{' '}
          <TypeAnimation
            sequence={[
              'store',
              1000,
              'edit',
              1000,
              'add',
              1000,
              'delete',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '30px', display: 'inline-block' }}
            repeat={Infinity}
          />{' '}
          your contacts!
        </p>
        <img src={mainImage} className={styles.contactsBookIcon}></img>
      </Container>
    </>
  );
}
