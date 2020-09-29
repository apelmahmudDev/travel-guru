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
import BookingPlace from './components/BookingPlace/BookingPlace';
import Login from './components/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <h1>{loggedInUser.name}</h1>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/booking/:placeId">
              <Booking></Booking>
            </Route>
            <Route path="/bookingPlace">
              <BookingPlace></BookingPlace>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
