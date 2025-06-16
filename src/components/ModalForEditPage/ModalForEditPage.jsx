import styles from './ModalForEditPage.module.css';
import Modal from 'react-modal';
import Container from '../Container/Container';
import { IoIosCloseCircleOutline, IoIosContact } from 'react-icons/io';
import { PiPhoneCallBold } from 'react-icons/pi';
import { MdOutlineEdit } from 'react-icons/md';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { patchContact } from '../../redux/contacts/operations';

export default function ModalForEditPage({
  modalIsOpen,
  setIsOpen,
  name,
  number,
  id,
}) {
  function closeModal() {
    setIsOpen(false);
  }
  const dispatch = useDispatch();
  const [editModeName, setEditNameMode] = useState(false);
  const [editNumberMode, setEditNumberMode] = useState(false);

  const editModeNameOn = () => setEditNameMode(true);

  const editModeNumberOn = () => setEditNumberMode(true);

  const editModeNameOff = () => setEditNameMode(false);

  const editModeNumberOff = () => setEditNumberMode(false);

  const styleForModal = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      background: 'none',
      border: 'none',
      zIndex: 3,
    },
    overlay: {
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={styleForModal}
      contentLabel="Edit contact modal"
    >
      <Formik
        onSubmit={(values) => {
          const result = { ...values, id };
          console.log(1);
          dispatch(patchContact(result));
          setEditNameMode(false);
          setEditNumberMode(false);
          closeModal();
        }}
        initialValues={{
          name,
          phone: number,
        }}
      >
        {({ values }) => (
          <Container>
            <Form>
              <button
                type="button"
                className={styles.exitBtn}
                onClick={closeModal}
              >
                <IoIosCloseCircleOutline className={styles.exitIcon} />
              </button>
              <div className={styles.contactWrapper}>
                <div className={styles.contact} id={id}>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactEditWrapper}>
                      <IoIosContact className={styles.contactIcon} />
                      {!editModeName ? (
                        <p className={styles.contactText}>{values.name}</p>
                      ) : (
                        <>
                          <Field name="name" className={styles.formInput} />
                          <ErrorMessage
                            name="name"
                            component="span"
                            className={styles.validationMsg}
                          />
                        </>
                      )}
                      {!editModeName ? (
                        <MdOutlineEdit
                          className={styles.contactEditIcon}
                          onClick={editModeNameOn}
                        />
                      ) : (
                        <IoIosCloseCircleOutline
                          className={styles.exitEditMode}
                          onClick={editModeNameOff}
                        />
                      )}
                    </div>
                    <div className={styles.contactEditWrapper}>
                      <PiPhoneCallBold className={styles.contactIcon} />
                      {!editNumberMode ? (
                        <p className={styles.contactText}>{values.phone}</p>
                      ) : (
                        <>
                          <Field name="phone" className={styles.formInput} />
                          <ErrorMessage
                            name="phone"
                            component="span"
                            className={styles.validationMsg}
                          />
                        </>
                      )}
                      {!editNumberMode ? (
                        <MdOutlineEdit
                          className={styles.contactEditIcon}
                          onClick={editModeNumberOn}
                        />
                      ) : (
                        <IoIosCloseCircleOutline
                          className={styles.exitEditMode}
                          onClick={editModeNumberOff}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <button className={styles.submitBtn} type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </Container>
        )}
      </Formik>
    </Modal>
  );
}
