import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '/Users/allisonmoss/dev/facenook/facenook-app/src/App.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
