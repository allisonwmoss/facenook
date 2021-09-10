import React from 'react'
import Header from "./components/Header";
import Nav from './components/Nav';
import { Route } from 'react-router-dom'
import ThumbnailsContainer from "./components/ThumbnailsContainer";
import VillagerDetail from './components/VillagerDetail';

function App() {
  return (
    <div>
      {/* ----homepage----- */}
      <Route path="/" exact component={Header} />
      <Route path="/" exact component={ThumbnailsContainer} />
      {/* ----detail view----*/}
      <Route path="/:id" component={Nav} />
      <Route path="/:id" component={VillagerDetail} />

    </div>
  );
}

export default App;
