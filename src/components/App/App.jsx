import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrathionPage = lazy(() =>
  import('../../pages/RegistrathionPage/RegistrathionPage'),
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage'),
);
const ContactsEditPage = lazy(() =>
  import('../../pages/ContactsEditPage/ContactsEditPage'),
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage'),
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <Suspense fallback={'Loading.... Please wait:)'}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo={'/'}
              component={<RegistrathionPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo={'/'} component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route
          path="/contacts/edit"
          element={<PrivateRoute component={<ContactsEditPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
