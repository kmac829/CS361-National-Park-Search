import React from 'react';
import './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/home';
import State from './views/state';
import About from './views/about'
import data from './data/data.json'
import {toSlug} from './utility'
import Park from './views/park'
import MapApi from './microservice/MapApi';

function App() {
  const routes = Object.keys(data).map(
    state=>{
      return(<Route path={state} element={<State data={data[state]} />} />)
    }
  )
  const parkRoutes = []
  Object.keys(data).forEach(
    state=>{
      data[state].parks.forEach(
        park=>{
          parkRoutes.push(<Route path={`/${state}/${toSlug(park.name)}`} element={<Park data={park} region={state} />} />)
        }
      )
      
    }
  )
  return (
    <Router>
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        {routes}
        {parkRoutes}
        <Route path='about' element={<About/>} />
        <Route path='/api/map' element={<MapApi/>}></Route>
      </Routes>
      </Router>
  );
}

export default App;
