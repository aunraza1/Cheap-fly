import React from 'react';
import '../../../assets/style.css'
import {useState,useEffect} from 'react'

function CarBooking(){
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

    return(
        <div>
        <div id="booking" className="section">
           <div className="section-center">
             <div className="container">
               <div className="row">
                 <div className="booking-form">
                   <div className="form-header">
                     <h1>Rent A Car</h1>
                   </div>
                   <form>
                     <div className="row">
                       <div className="col-sm-6" >
                         <div className="form-group">
                           <span className="form-label">Name</span>
                           <input onChange={(e)=>setDetails({...carDetails,userName:e.target.value})} className="form-control" type="text" placeholder="Auto Rent A Car" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Location</span>
                           <input onChange={(e)=>setDetails({...carDetails,userEmail:e.target.value})} className="form-control" type="email" placeholder="E.g Karachi" />
                         </div>
                       </div>
                       
                     </div>
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Car Name</span>
                           <input onChange={(e)=>setDetails({...carDetails,userName:e.target.value})} className="form-control" type="text" placeholder="Civic" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Car Segment</span>
                           <input onChange={(e)=>setDetails({...carDetails,userEmail:e.target.value})} className="form-control" type="email" placeholder="Sedan" />
                         </div>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Registration Number</span>
                           <input onChange={(e)=>setDetails({...carDetails,userName:e.target.value})} className="form-control" type="text" placeholder="RIP-5678" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Hourly Rate</span>
                           <input onChange={(e)=>setDetails({...carDetails,userEmail:e.target.value})} className="form-control" type="email" placeholder="1000" />
                         </div>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Car Image</span>
                           <input onChange={(e)=>setDetails({...carDetails,userName:e.target.value})} className="form-control" style={{backgroundColor: 'lightgray'}} type="file"  />
                         </div>
                       </div>
                       
                     </div>
                     
                    
                     
                     <div className="form-btn">
                       <button className="submit-btn">Rent Now</button>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
         </div>
           
     
    )

}
export default CarBooking