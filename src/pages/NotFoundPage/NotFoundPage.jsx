import { useEffect } from 'react';
import gsap from 'gsap';
import styles from './NotFoundPage.module.css';
import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container/Container';
import ParticlesComponent from '../../components/ParticlesComponent/ParticlesComponent';

export default function NotFoundPage() {
  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();

    t1.to(`.${styles.cog1}`, {
      transformOrigin: '50% 50%',
      rotation: '+=360',
      repeat: -1,
      ease: 'none',
      duration: 8,
    });

    t2.to(`.${styles.cog2}`, {
      transformOrigin: '50% 50%',
      rotation: '-=360',
      repeat: -1,
      ease: 'none',
      duration: 8,
    });

    t3.fromTo(
      `.${styles.wrongPara}`,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        repeat: -1,
        yoyo: true,
      },
    );
  }, []);

  return (
    <>
      <ParticlesComponent />
      <AppBar />
      <Container>
        <div className={styles.container}>
          <h1 className={styles.firstFour}>4</h1>

          <div className={styles.cogWheel1}>
            <div className={styles.cog1}>
              <div className={styles.top}></div>
              <div className={styles.down}></div>
              <div className={styles.leftTop}></div>
              <div className={styles.leftDown}></div>
              <div className={styles.rightTop}></div>
              <div className={styles.rightDown}></div>
              <div className={styles.left}></div>
              <div className={styles.right}></div>
            </div>
          </div>

          <div className={styles.cogWheel2}>
            <div className={styles.cog2}>
              <div className={styles.top}></div>
              <div className={styles.down}></div>
              <div className={styles.leftTop}></div>
              <div className={styles.leftDown}></div>
              <div className={styles.rightTop}></div>
              <div className={styles.rightDown}></div>
              <div className={styles.left}></div>
              <div className={styles.right}></div>
            </div>
          </div>

          <h1 className={styles.secondFour}>4</h1>
          <p className={styles.wrongPara}>Uh Oh! Page not found!</p>
        </div>
      </Container>
    </>
  );
}
