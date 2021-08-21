import React from 'react'
import '../assets/style.css'
import {useState,useEffect} from 'react'


function Cars(){

    const [carDetails,setDetails]=useState({
        userName:"",
        userEmail:"",
        userContact:"",
        userLocation:"",
        carName:"",
        pickupDate:"",
        hours:"",
        min:"",
        timeZone:""

    })

useEffect(()=>{
    console.log(carDetails)

},[carDetails])

    return(
        <>
       <div>
     <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="booking-form">
                <div className="form-header">
                  <h1>Book a car</h1>
                </div>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Name</span>
                        <input onChange={(e)=>setDetails({...carDetails,userName:e.target.value})} className="form-control" type="text" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Email</span>
                        <input onChange={(e)=>setDetails({...carDetails,userEmail:e.target.value})} className="form-control" type="email" placeholder="Enter your email" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="form-label">Phone</span>
                    <input onChange={(e)=>setDetails({...carDetails,userContact:e.target.value})} className="form-control" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="form-group">
                    <span className="form-label">Pickup Location</span>
                    <input onChange={(e)=>setDetails({...carDetails,userLocation:e.target.value})}  className="form-control" type="text" placeholder="Enter Pickup Location" />
                  </div>
                  <div className="form-group">
                    <span className="form-label">Car Name</span>
                    <input  onChange={(e)=>setDetails({...carDetails,carName:e.target.value})} className="form-control" type="text" placeholder="Enter Car Name" />
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="form-group">
                        <span className="form-label">Pickup Date</span>
                        <input onChange={(e)=>setDetails({...carDetails,pickupDate:e.target.value})} className="form-control" type="date" required />
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="form-group">
                            <span className="form-label">Hour</span>
                            <select className="form-control"  onChange={(e)=>setDetails({...carDetails,hours:e.target.value})}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                            <span className="select-arrow" />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <span className="form-label">Min</span>
                            <select className="form-control" onChange={(e)=>setDetails({...carDetails,min:e.target.value})}>
                              <option>05</option>
                              <option>10</option>
                              <option>15</option>
                              <option>20</option>
                              <option>25</option>
                              <option>30</option>
                              <option>35</option>
                              <option>40</option>
                              <option>45</option>
                              <option>50</option>
                              <option>55</option>
                            </select>
                            <span className="select-arrow" />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <span className="form-label">AM/PM</span>
                            <select className="form-control" onChange={(e)=>setDetails({...carDetails,zo:e.target.value})}>
                              <option>AM</option>
                              <option>PM</option>
                            </select>
                            <span className="select-arrow" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-btn">
                    <button className="submit-btn">Book Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

        </>
    )

}
export default Cars