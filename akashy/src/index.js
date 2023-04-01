import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page2 from './page2'
import Page3 from './page3'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page2 />
    <Page3 />
  </React.StrictMode>
);

