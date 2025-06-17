import { ErrorMessage, Field, Form, Formik } from 'formik';
import Container from '../../components/Container/Container';
import AppBar from '../../components/AppBar/AppBar';
import ParticlesComponent from '../../components/ParticlesComponent/ParticlesComponent';
import styles from './LoginPage.module.css';
import mainIcon from '../../images/LoginPage/Login.png';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { loginValidation } from './loginValidation';

export default function LoginPage() {
  const dispatch = useDispatch();
  return (
    <>
      <ParticlesComponent />
      <AppBar />
      <Container>
        <div className={styles.formWrapper}>
          <p className={styles.title}>Login form</p>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              dispatch(logIn(values));
            }}
            validationSchema={loginValidation}
          >
            <Form className={styles.form}>
              <label className={styles.label} htmlFor="email">
                Email:
              </label>
              <Field
                className={styles.input}
                name="email"
                id="email"
                autoComplete="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.validationMsg}
              />
              <label className={styles.label} htmlFor="password">
                Password:
              </label>
              <Field
                className={styles.input}
                name="password"
                id="password"
                type="password"
                autoComplete="current-password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.validationMsg}
              />
              <button className={styles.submitBtn} type="submit">
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
