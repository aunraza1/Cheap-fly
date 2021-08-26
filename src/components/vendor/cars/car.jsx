import React from 'react';
import '../../../assets/style.css'
import {useState,useEffect} from 'react'
import {addCar} from '../../../config/api';
import { connect } from 'react-redux'

function CarBooking({vendorData}){
  
    const [carDetails,setDetails]=useState({
        name:"",
        location:"",
        carName:"",
        carSegment:"",
        registrationNo:"",
        hourlyRate: 0,
        carImage: '',
    

    })
    useEffect(()=>{
        setDetails({...carDetails, ownerId: vendorData?.uid})
    },[vendorData?.uid])

    const submitDtails = (e) =>{
        e.preventDefault()
        addCar(carDetails)
      
    }
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
                   {(vendorData?.uid) ? (<form onSubmit={submitDtails}>
                     <div className="row">
                       <div className="col-sm-6" >
                         <div className="form-group">
                           <span className="form-label">Name</span>
                           <input onChange={(e)=>setDetails({...carDetails,name:e.target.value})} className="form-control" type="text" placeholder="Auto Rent A Car" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Location</span>
                           <input onChange={(e)=>setDetails({...carDetails,location:e.target.value})} className="form-control" type="text" placeholder="E.g Karachi" />
                         </div>
                       </div>
                       
                     </div>
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Car Name</span>
                           <input onChange={(e)=>setDetails({...carDetails,carName:e.target.value})} className="form-control" type="text" placeholder="Civic" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Car Segment</span>
                           <input onChange={(e)=>setDetails({...carDetails,carSegment:e.target.value})} className="form-control" type="text" placeholder="Sedan" />
                         </div>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Registration Number</span>
                           <input onChange={(e)=>setDetails({...carDetails,registrationNo:e.target.value})} className="form-control" type="text" placeholder="RIP-5678" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Hourly Rate</span>
                           <input onChange={(e)=>setDetails({...carDetails,hourlyRate:e.target.value})} className="form-control" type="number" placeholder="1000" />
                         </div>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="form-group">
                           <span className="form-label">Car Image</span>
                           <input onChange={(e)=>setDetails({...carDetails,carImage:e.target.files[0]})} className="form-control" style={{backgroundColor: 'lightgray'}} type="file"  />
                         </div>
                       </div>
                       
                     </div>
                    
                    
                     
                     <div className="form-btn">
                       <button className="submit-btn" type='submit' >Rent Now</button>
                     </div>
                   </form>) : (<div className="form-header">
                     <h1>This Service Is Not Availaible For You</h1>
                   </div>)}
                   
                 </div>
               </div>
             </div>
           </div>
         </div>
         </div>
           
     
    )

}
const mapDispatchToProps = (dispatch) => ({
   
  
  })
const mapStateToProps = (state) => ({
    vendorData: state.venderData,
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(CarBooking)