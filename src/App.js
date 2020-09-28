import React, { createContext, useState } from 'react';
import './App.css';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';

export const UserContext = createContext();


function App() {
  const [place, setPlace] = useState([]);
  return (
    <UserContext.Provider value={[place, setPlace]}>
      <Router>
        <div className="App">
          <h1>{place.name}</h1>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/booking/:placeId">
              <Booking></Booking>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
