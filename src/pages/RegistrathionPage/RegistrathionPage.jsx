import styles from './RegistrathionPage.module.css';
import mainIcon from '../../images/RegisterPage/Register.png';
import ParticlesComponent from '../../components/ParticlesComponent/ParticlesComponent';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Container from '../../components/Container/Container';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';

export default function RegistrathionPage() {
  const dispatch = useDispatch();
  return (
    <>
      <ParticlesComponent />
      <NavigationBar />
      <Container>
        <div className={styles.formWrapper}>
          <p className={styles.title}>Registration form</p>
          <Formik
            initialValues={{
              email: '',
              name: '',
              password: '',
            }}
            onSubmit={(values) => {
              dispatch(signUp(values));
            }}
          >
            <Form className={styles.form}>
              <label htmlFor="name" className={styles.label}>
                Name:
              </label>
              <Field
                name="name"
                id="name"
                className={styles.input}
                autoComplete="username"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />

              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <Field
                name="email"
                id="email"
                type="email"
                className={styles.input}
                autoComplete="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />

              <label htmlFor="password" className={styles.label}>
                Password:
              </label>
              <Field
                name="password"
                id="password"
                type="password"
                className={styles.input}
                autoComplete="current-password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />

              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </Form>
          </Formik>
        </div>
        <div className={styles.imageWrapper}>
          <img src={mainIcon} />
        </div>
      </Container>
    </>
  );
}
