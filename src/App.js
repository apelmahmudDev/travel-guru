import React from 'react';
import './App.css';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
