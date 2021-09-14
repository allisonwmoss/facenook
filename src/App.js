import React from 'react'
import Header from "./components/Header";
import { Route, Redirect } from 'react-router-dom'
import ThumbnailsContainer from "./components/ThumbnailsContainer";
import VillagerDetail from './components/VillagerDetail';
import Copyright from './components/Copyright';
import './App.css'

function App() {
  return (
    <div>
      <Header></Header>
      {/* ----homepage----- */}
      <Route exact path="/"> <ThumbnailsContainer /> </Route>
      <Route exact path="/"> <Copyright /> </Route>
      {/* ----detail view----*/}
      <Route path="/:id" component={VillagerDetail} />
      {/* ----redirects for error handling/navigation---- */}
      <Route path="/error">
        <Redirect to="/"></Redirect>
      </Route>
      <Route path="/redirect">
        <Redirect to="/"></Redirect>
      </Route>
    </div>
  )
}

export default App;
