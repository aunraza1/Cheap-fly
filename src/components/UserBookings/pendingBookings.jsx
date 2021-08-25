import React from 'react'
import {connect} from 'react-redux'
import { userBookings } from '../../store/actions'
import { useEffect } from 'react'


const PendingBookings=({userBookings,bookings,loggedUser})=>{




    
useEffect(() => {
    userBookings(loggedUser)
    console.log(bookings)
},[] )




    return(
        
         <div className="row">
           
           { bookings && bookings.map((v,i)=>{
                return(
                    <div style={{marginLeft:15,marginTop:20}} className="card text-center">
                    <div className="card-header">
                       {`Booking #${v.key}`}
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{v.hotelName?v.hotelName:v.carName}</h2>
                      <h5> {v.hotelRatings?v.hotelRatings+" Star Hotel":v.carSegment+""}</h5>
                      <h5>{v.days?v.days+" Day/s Stay":v.duration+" Hour/s"}</h5>
                      <h5>{`${v.amountPayable?v.amountPayable:v.totalAmount} PKR Amount Payable`}</h5>
                      <h6>{v.checkInDate?v.checkInDate+" Arriving Date":"Required on: "+v.date} </h6>
                      
    
                    </div>
                    <div className="card-footer text-muted">
                    <p className="card-text">Request Sent!</p>
                    </div>
                  </div>
                )
            })}
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