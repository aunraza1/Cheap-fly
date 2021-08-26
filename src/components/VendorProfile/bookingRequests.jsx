import React from 'react'
import {connect} from 'react-redux'
import {venderBookings } from '../../store/actions'
import { useEffect } from 'react'
import{Requests,removeRequest} from '../../config/api'



const BookingRequests=({allRequests,venderBookings,venderData})=>{




    
useEffect(() => {
    venderBookings(venderData)
    console.log(allRequests)
},[])







    return(
        
         <div className="row">
           
           { allRequests && allRequests.map((v,i)=>{
                return(
                    <div style={{marginLeft:15,marginTop:20}} className="card text-center">
                    <div className="card-header">
                       {`Booking #${v.key}`}
                    </div>
                    <div className="card-body">
                    <h2 className="card-title">{v.userName}</h2>
                      <h2 className="card-title">{v.hotelName?v.hotelName:v.carName}</h2>
                      <h5> {v.hotelRatings?v.hotelRatings+" Star Hotel":v.carSegment+""}</h5>
                      <h5>{v.days?v.days+" Day/s Stay":v.duration+" Hour/s"}</h5>
                      <h5>{`${v.amountPayable?v.amountPayable:v.totalAmount} PKR Amount Payable`}</h5>
                      <h6>{v.checkInDate?v.checkInDate+" Arriving Date":"Required on: "+v.date} </h6>
                      
    
                    </div>
                    <div className="card-footer text-muted">
                    <p className="card-text">
                    <a onClick={()=>Requests(v.key,v.userId)} href="#" class=" ml-1 btn btn-primary">Accept Request</a>
                    <a onClick={()=>removeRequest(v.key)} class=" ml-2 btn btn-primary">Reject Request</a>
                    </p>
                    </div>
                  </div>
                )
            })}
   </div>
      
      
      
    )

}


const mapStateToProps=(state)=>({
  allRequests:state.allRequests,
  venderData:state.venderData,
  


})

const mapDispathToProps=(dispatch)=>({

    venderBookings:(venderData)=>dispatch(venderBookings(venderData)),


})
export default connect(mapStateToProps,mapDispathToProps) (BookingRequests)