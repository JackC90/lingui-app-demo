import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './containers/Main/Main';
import I18nLoader from './containers/I18nLoader/I18nLoader';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <I18nLoader>
        <Main />
      </I18nLoader>
    </Provider>
  );
}

export default App;
