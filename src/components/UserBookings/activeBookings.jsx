import React from 'react'
import {connect} from 'react-redux'
import { approveduserBookings } from '../../store/actions'
import { useEffect } from 'react'




function ActiveBookings({approveduserBookings,approvedBookings,loggedUser}){

    useEffect(() => {
        approveduserBookings(loggedUser)
    },[] )


    





    return(
        
        <div className="row">
           
            {approvedBookings && approvedBookings.map((v,i)=>{
                return(
                    <div style={{marginLeft:15}} className="card text-center">
                    <div className="card-header">
                       Booking Approved!
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{v.hotelName}</h2>
                      <h5> {`${v.hotelRatings} Star Hotel`}</h5>
                      <h5>{`${v.days} Day/s Stay`}</h5>
                      <h6>{`${v.checkInDate} Ariving Date`}</h6>
                      
    
                    </div>
                    <div className="card-footer text-muted">
                    <p className="card-text">{`${v.amountPayable} PKR Amount payed!`}</p>
                    </div>
                  </div>

                )
            })}
   
      </div>
      
      
    )

}


const mapStateToProps=(state)=>({
    approvedBookings:state.approvedBookings,
    loggedUser:state.loggedUser,

})

const mapDispathToProps=(dispatch)=>({

    approveduserBookings:(loggedUser)=>dispatch(approveduserBookings(loggedUser))

})
export default connect(mapStateToProps,mapDispathToProps) (ActiveBookings)