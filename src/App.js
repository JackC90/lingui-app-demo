import React from 'react';
import './App.css';
import List from './components/List/List';
import catalogZhCn from './locales/zh-CN/messages.js';
import { I18nProvider } from '@lingui/react'

const catalogs = { 'en-US': catalogZhCn };

function App() {
  const content = {
    name: 'Wilson',
    date: Date.now(),
    value: 5,
  };

  return (
    <I18nProvider language="zh-CN" catalogs={catalogs}>
      <div className="App">
        <header className="App-header">
          <List content={content} />
        </header>
      </div>
    </I18nProvider>  
  );
}

export default App;
