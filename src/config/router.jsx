import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from '../Home'
import CarBooking from "../CarBooking";
import FlightBookings from "../FlightBookings";
import SignupTab from "../components/SignupTab";
import LoginTab from "../components/LoginTab";
import VendorTab from '../components/VendorTab'
import HotelBooking from "../components/hotelBooking";




  function Routes(){
      return(

            <Router>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/bookcar" component={CarBooking}></Route>
                <Route exact path="/flights" component={FlightBookings}></Route>
                <Route exact path="/Signup" component={SignupTab}></Route>
                <Route exact path="/Signin" component={LoginTab}></Route>
                <Route exact path="/Vendor" component={VendorTab}></Route>
                <Route exact path="/hotelBooking" component={HotelBooking}></Route>
               
            </Router>
      )

  }
  export default Routes