import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { RiseLoader } from 'react-spinners';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import { toast, ToastContainer } from 'react-toastify';
import Error from '../Error/Error';

export default function App() {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Sorry but we have issue 😥');
    }
  }, [error]);

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && <RiseLoader />}
      {error && <Error />}
      <ToastContainer />
      <ContactList />
    </div>
  );
}
