import React from 'react'
import {connect} from 'react-redux'
import {venderBookings } from '../../store/actions'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import{Requests,removeRequest} from '../../config/api'



const BookingRequests=({allRequests,venderBookings,venderData})=>{




    
useEffect(() => {
    venderBookings(venderData)
    console.log(allRequests)
},[])







    return(
        
         <div className="row">
           
           { allRequests.length>0 ? allRequests.map((v,i)=>{
                return(
                    <div style={{marginLeft:15,marginTop:20}} className="card text-center">
                    <div className="card-header">
                       {`Booking #${v.key}`}
                    </div>
                    <div className="card-body">
                    <h2 className="card-title">{v.userName}</h2>
                    <h2 className="card-title">{v.hotelName?v.hotelName:v.carName?v.carName:v.tourName}</h2>
                      <h5> {v.hotelRatings?v.hotelRatings+" Star Hotel":v.carSegment?v.carSegment:"Featured Tour"}</h5>
                      <h5>{v.days?v.days+" Day/s Stay":v.duration? v.duration+" Hour/s":v.tourStay}</h5>
                      <h5>{`${v.amountPayable?v.amountPayable:v.totalAmount} PKR Amount Payable`}</h5>
                      <h6>{v.checkInDate?v.checkInDate+" Arriving Date": v.date?"Required on: "+v.date:"Departure "+v.tourStartDate} </h6>
                      
    

                  
                    </div>
                    <div className="card-footer text-muted">
                    <p className="card-text">
                    <a onClick={()=>Requests(v.key,v.userId,v.ownerId)} href="#" class=" ml-1 btn btn-primary">Accept Request</a>
                    <a onClick={()=>removeRequest(v.key)} class=" ml-2 btn btn-primary">Reject Request</a>
                    </p>
                    </div>
                  </div>
                )
            }): <div style={{flexDirection:'column',justifyContent:'center',height:'calc(100vh - 50px)',alignItems:'center',display:'flex',width:"100%"}}>
                 
                 <FontAwesomeIcon style={{height:100,width:100,opacity:0.4}} icon={faDatabase} color="lightgray" />
            <br/>
                 
            <h4>No Active Request Yet!</h4>
        </div>}
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