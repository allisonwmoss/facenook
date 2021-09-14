//--------------FACENOOK:--------------------
//-----We dare to ask, "What if the Animal Crossing universe had a social media site?"-----
//Please see Footnotes.txt for citations and attribution.
//Animal Crossing copyright 2001-2021, Nintendo.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import '/Users/allisonmoss/dev/facenook/src/App.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
