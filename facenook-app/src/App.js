import React, { useState, useEffect } from 'react'
import Header from "./components/Header";
import Nav from './components/Nav';
import { Route } from 'react-router-dom'
import ThumbnailsContainer from "./components/ThumbnailsContainer";
import VillagerDetail from './components/VillagerDetail';

function App() {

  return (
    <div>
      {/* ----homepage----- */}
      <Route exact path="/" component={Header} />
      <Route exact path="/"> <ThumbnailsContainer /> </Route>
      {/* ----detail view----*/}
      <Route path="/:id" component={VillagerDetail} />

    </div>
  );
}

export default App;
