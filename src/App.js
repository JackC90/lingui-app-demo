import React from 'react';
import { createStore } from "redux"; 
import { Provider } from 'react-redux';
import './App.css';
import Main from './containers/Main/Main';
import I18nLoader from './containers/I18nLoader/I18nLoader';
import reducer from './reducers';

const initialState = {
  locale: {
    language: "zh-CN",
  },
};
const store = createStore(reducer, initialState);

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
