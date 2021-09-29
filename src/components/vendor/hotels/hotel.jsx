import React from 'react'
import '../../../assets/style.css'
import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {registerHotel} from '../../../store/actions/index'

function HotelBooking({registerHotel,venderData}){

    const [hotelDetails,sethotelDetails]=useState({
        hotelName:"",
        singlePrice:"",
        doublePrice:"",
        kingPrice:"",
        queenPrice:"",
        hotelLocation:"",
        hotelRatings:"",
        hotelImage:"",
        ownerId:venderData?.uid,
        ownerName:venderData?.name,
     
    })

  

const sendData=(e)=>{
    e.preventDefault()
    registerHotel(hotelDetails)

}
    

    return(
        <>
        <div>
         <div id="booking2" className="section">
         <div className="section-center">
           <div className="container">
             <div className="row">
               <div className="booking-form">
                 
                 <div className="form-header">
                   <h1>Hotel Details</h1>
                 </div>
                 <form onSubmit={sendData}>
                   <div className="row">
                     <div className="col-sm-6">
                       <div className="form-group">
                         <span className="form-label">Hotel Name</span>
                         <input required onChange={(e)=>sethotelDetails({...hotelDetails,hotelName:e.target.value})} className="form-control" type="text" placeholder="Hotel Name" />
                       </div>
                     </div>
                   
                   </div>

                   <div className="row">
                   <div className="col-sm-3">
                   <div className="form-group">
                     <span className="form-label">Single Price</span>
                     <input required onChange={(e)=>sethotelDetails({...hotelDetails,singlePrice:e.target.value})} className="form-control" type="number" placeholder="Single Room " />
                   </div>
                   </div>
                   <div className="col-sm-3">
                   <div className="form-group">
                     <span className="form-label">Double  Price</span>
                     <input required onChange={(e)=>sethotelDetails({...hotelDetails,doublePrice:e.target.value})} className="form-control" type="number" placeholder="Double Room " />
                   </div>
                   </div>
                   <div className="col-sm-3">
                   <div className="form-group">
                     <span className="form-label">King Price</span>
                     <input required onChange={(e)=>sethotelDetails({...hotelDetails,kingPrice:e.target.value})} className="form-control" type="number" placeholder="King Room " />
                   </div>
                   </div>
                   <div className="col-sm-3">
                   <div className="form-group">
                     <span className="form-label">Queen  Price</span>
                     <input required onChange={(e)=>sethotelDetails({...hotelDetails,queenPrice:e.target.value})} className="form-control" type="number" placeholder="Queen Room " />
                   </div>
                   </div>
                   </div>



                   <div className="row">
                   <div className="col-sm-6">
                   <div className="form-group">
                     <span className="form-label">Location</span>
                     <input required onChange={(e)=>sethotelDetails({...hotelDetails,hotelLocation:e.target.value})} className="form-control" type="text" placeholder="Location" />
                   </div>
                   </div>
                   <div className="col-sm-6">
                   <div className="form-group">
                     <span className="form-label">Ratings</span>
                     <input required onChange={(e)=>sethotelDetails({...hotelDetails,hotelRatings:e.target.value})} className="form-control" type="number" placeholder="Ratings" />
                   </div>
                   </div>
                
                 
                   </div>
                
                   <div className="row">
                     <div className="col-sm-12">
                       <div className="form-group">
                         <span className="form-label">Hotel Image</span>
                         <input required type="file" onChange={(e)=>e.target.files[0]?sethotelDetails({...hotelDetails,hotelImage:e.target.files[0]}):alert("Image not Selected!")} className="form-control"  required />
                       </div>
                     </div>
                   
                   </div>
                   <div >
                   <button className="submit-btn" type='submit' >Add Hotel</button>
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

const mapStateToProps=(state)=>({
  venderData:state.venderData

})
const mapDispatchToProps=(dispatch)=>({
    registerHotel:(obj)=>dispatch(registerHotel(obj))

})
export default connect(mapStateToProps,mapDispatchToProps) (HotelBooking)