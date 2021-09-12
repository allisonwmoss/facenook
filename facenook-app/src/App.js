import React, { useState, useEffect } from 'react'
import Header from "./components/Header";
import Nav from './components/Nav';
import { Route } from 'react-router-dom'
import ThumbnailsContainer from "./components/ThumbnailsContainer";
import VillagerDetail from './components/VillagerDetail';
import Copyright from './components/Copyright';
import Error from './components/Error';

function App() {

  return (
    <div>
      {/* ----homepage----- */}
      <Route exact path="/" component={Header} />
      <Route exact path="/"> <ThumbnailsContainer /> </Route>
      <Route exact path="/"> <Copyright /> </Route>
      {/* ----detail view----*/}
      <Route path="/:id" component={VillagerDetail} />
      {/* ----error handler---- */}
      <Route exact path="/error" component={Error} />
      <Route exact path="/search"></Route>
    </div>
  );
}

export default App;
