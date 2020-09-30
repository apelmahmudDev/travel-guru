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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [booking, setBooking] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, booking, setBooking]}>
      <Router>
        <div className="App">
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/booking/:placeId">
              <Booking></Booking>
            </Route>
            <PrivateRoute path="/bookingPlace">
              <BookingPlace></BookingPlace>
            </PrivateRoute>
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
