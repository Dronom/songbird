import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import './styles/index.scss';

import App from './components/App';

import i18next from './helpers/translate/i18next';
import configureStore from './redux';

const Main = () => (
  <Provider store={configureStore}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>
);

render(<Main />, document.getElementById('app'));
