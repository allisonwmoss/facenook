import React, { useState, useEffect } from 'react'
import Header from "./components/Header";
import Nav from './components/Nav';
import { Route } from 'react-router-dom'
import ThumbnailsContainer from "./components/ThumbnailsContainer";
import VillagerDetail from './components/VillagerDetail';

function App() {

  const [villagers, setVillagers] = useState([])
  const getRandomId = () => {
    const randId = Math.ceil(Math.random() * 391)
    return (randId)
  }

  useEffect(() => {
    let villagersArr = [];
    for (let i = 0; i < 5; i++) {
      const randId = getRandomId()
      const url = `https://acnhapi.com/v1/villagers/${randId}`
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          villagersArr.push(json)
          setVillagers(villagersArr)
          // console.log(json.name['name-USen'])
        })
        .catch(console.error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(villagers)

  return (
    <div>
      {/* ----homepage----- */}
      <Route exact path="/" component={Header} />
      <Route exact path="/"> <ThumbnailsContainer villagers={villagers} /> </Route>
      {/* ----detail view----*/}
      <Route path="/:id" component={Nav} />
      <Route path="/:id" component={VillagerDetail} />

    </div>
  );
}

export default App;
