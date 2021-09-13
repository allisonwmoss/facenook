import React, { useState, useEffect } from 'react'
import Header from "./components/Header";
import Nav from './components/Nav';
import { Route, Redirect } from 'react-router-dom'
import ThumbnailsContainer from "./components/ThumbnailsContainer";
import VillagerDetail from './components/VillagerDetail';
import Copyright from './components/Copyright';
import Error from './components/Error';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div>
      {/* ----homepage----- */}
      <Route exact path="/" component={Header} />
      <Route exact path="/"> <ThumbnailsContainer /> </Route>
      <Route exact path="/"> <Copyright /> </Route>
      {/* ----detail view----*/}
      <Route path="/:id" component={VillagerDetail} />
      <Route path="/error">
        <Redirect to="/"></Redirect>
      </Route>
    </div>
  )

}

export default App;
