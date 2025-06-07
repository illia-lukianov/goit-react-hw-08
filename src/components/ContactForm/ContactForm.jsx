import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './ContactForm.module.css';
import { useId } from 'react';
import { PhoneSchema } from './PhoneSchema';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const initialValues = {
    username: '',
    phoneNumber: '',
  };

  const handleSubmit = (event, { resetForm }) => {
    dispatch(
      addContact({
        name: event.username,
        number: event.phoneNumber,
      }),
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={PhoneSchema}
    >
      <Form className={styles.formContainer}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={styles.formInput}
          id={nameFieldId}
          name="username"
          type="text"
        />
        <ErrorMessage
          name="username"
          component="span"
          className={styles.validationMsg}
        />

        <label htmlFor={phoneFieldId}>Number</label>
        <Field
          className={styles.formInput}
          id={phoneFieldId}
          name="phoneNumber"
          type="text"
        />
        <ErrorMessage
          name="phoneNumber"
          component="span"
          className={styles.validationMsg}
        />

        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
