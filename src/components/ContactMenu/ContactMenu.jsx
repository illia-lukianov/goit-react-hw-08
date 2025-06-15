import { useId, useState } from 'react';
import styles from './ContactMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import clsx from 'clsx';
import { closeMenu, openMenu } from '../../redux/contactsMenu/slice';
import { Link } from 'react-router-dom';
import { selectIsOpenMenu } from '../../redux/contactsMenu/selectors';
import { RxHamburgerMenu } from 'react-icons/rx';
import { PhoneSchema } from './PhoneSchema';

export default function ContactMenu() {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const menuIsOpen = useSelector(selectIsOpenMenu);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {!menuIsOpen && (
        <button
          className={styles.burgerMenu}
          onClick={() => dispatch(openMenu())}
        >
          <RxHamburgerMenu className={styles.menuIcon} />
        </button>
      )}
      <div className={styles.menuList}>
        <button
          className={styles.exitBtn}
          onClick={() => dispatch(closeMenu())}
        >
          <IoIosCloseCircleOutline className={styles.exitIcon} />
        </button>

        <button
          className={clsx(styles.menuBtn, isOpen && styles.activeMenuBtn)}
          onClick={toggleMenu}
        >
          Add Contact
        </button>
        {isOpen && (
          <div className={styles.formWrapper}>
            <Formik
              validationSchema={PhoneSchema}
              initialValues={{
                name: '',
                number: '',
              }}
              onSubmit={(values, { resetForm }) => {
                dispatch(addContact(values));
                resetForm();
              }}
            >
              <Form className={styles.form}>
                <label className={styles.label} htmlFor={nameFieldId}>
                  Name:
                </label>
                <Field className={styles.input} id={nameFieldId} name="name" />
                <ErrorMessage
                  name="name"
                  component="span"
                  className={styles.validationMsg}
                />
                <label className={styles.label} htmlFor={phoneFieldId}>
                  Number:
                </label>
                <Field
                  className={styles.input}
                  id={phoneFieldId}
                  name="number"
                />
                <ErrorMessage
                  name="number"
                  component="span"
                  className={styles.validationMsg}
                />
                <button className={styles.submitBtn} type="submit">
                  Add
                </button>
              </Form>
            </Formik>
          </div>
        )}

        <Link
          to={'/contacts/edit'}
          className={`${styles.menuBtn} ${styles.Link}`}
        >
          Edit Contact
        </Link>
      </div>
    </div>
  );
}
