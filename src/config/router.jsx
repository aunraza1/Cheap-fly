import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from '../Home'
import CarBooking from "../CarBooking";
import FlightBookings from "../FlightBookings";
import Signup from '../components/signup'
import Login from '../components/login'




  function Routes(){
      return(

            <Router>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/bookcar" component={CarBooking}></Route>
                <Route exact path="/flights" component={FlightBookings}></Route>
                <Route exact path="/Signup" component={Signup}></Route>
                <Route exact path="/Signin" component={Login}></Route>
            </Router>
      )

  }
  export default Routes