import React from 'react';
import ReactDOM from 'react-dom/client';

import { JournalAll } from './JournalAll';
import './styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <JournalAll />
  </React.StrictMode>
);

