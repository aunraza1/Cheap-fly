import React from 'react'
import {connect} from 'react-redux'
import { userBookings } from '../../store/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import '../../assets/style.css'



const PendingBookings=({userBookings,bookings,loggedUser})=>{




    
useEffect(() => {
    userBookings(loggedUser)
    console.log(bookings)
},[] )




    return(
        
         <div className="row">
      
           
           { bookings.length>0?  bookings.map((v,i)=>{
                return(
                    <div style={{marginLeft:15,marginTop:20}} className="card text-center">
                    <div className="card-header">
                       {`Booking #${v.key}`}
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{v.hotelName?v.hotelName:v.carName?v.carName:v.tourName}</h2>
                      <h5> {v.hotelRatings?v.hotelRatings+" Star Hotel":v.carSegment?v.carSegment:"Featured Tour"}</h5>
                      <h5>{v.days?v.days+" Day/s Stay":v.duration? v.duration+" Hour/s":v.tourStay}</h5>
                      <h5>{`${v.amountPayable?v.amountPayable:v.totalAmount} PKR Amount Payable`}</h5>
                      <h6>{v.checkInDate?v.checkInDate+" Arriving Date": v.date?"Required on: "+v.date:"Departure "+v.tourStartDate} </h6>
                    </div>
                    <div className="card-footer text-muted">
                    <p className="card-text">Request Sent!</p>
                    </div>
                  </div>
                )
            }):<div style={{flexDirection:'column',justifyContent:'center',height:'calc(100vh - 50px)',alignItems:'center',display:'flex',width:"100%"}}>
                 
                  <FontAwesomeIcon style={{height:100,width:100,opacity:0.4}} icon={faUser} color="lightgray" />
                  <br/>
                  <h4>No Pending Bookings</h4>
              

              </div>}
   </div>
      
      
      
    )

}


const mapStateToProps=(state)=>({
    bookings:state.bookings,
    loggedUser:state.loggedUser,

})

const mapDispathToProps=(dispatch)=>({

    userBookings:(loggedUser)=>dispatch(userBookings(loggedUser))

})
export default connect(mapStateToProps,mapDispathToProps) (PendingBookings)