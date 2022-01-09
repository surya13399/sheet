import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ExceltoJson from './ExcelReader.js'


ReactDOM.render(
  <React.StrictMode>
    <App />
     <ExceltoJson />
  
  </React.StrictMode>,
  document.getElementById('root')
);

