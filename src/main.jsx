import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { PersistGate } from 'redux-persist/integration/react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
