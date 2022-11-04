import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './features/store'
import { Provider } from 'react-redux';
import firebaseConfig from './firebaseConfig'
import { FirebaseAppProvider } from "reactfire"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.Suspense fallback={<p>Cargando...</p>}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </React.Suspense>
  </FirebaseAppProvider>
);

reportWebVitals();
