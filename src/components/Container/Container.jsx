import styles from './Container.module.css';

export default function Container({ children, stylePage, styleWrapper }) {
  return (
    <div className={styles.pageWrapper} style={stylePage}>
      <div className={styles.informationWrapper} style={styleWrapper}>
        {children}
      </div>
    </div>
  );
}
