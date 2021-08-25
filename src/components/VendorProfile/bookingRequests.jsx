import React from 'react'
import { useEffect } from 'react'
import {connect} from 'react-redux'
import { venderBookings } from '../../store/actions'

function Requests({venderData,allRequests,venderBookings}){




    return(
        <div className="card text-center">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a onClick={()=>venderBookings(venderData)}  className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
    )
}


const mapStateToProps=(state)=>({
    venderData:state.venderData,
   

})

const mapDispatchToProps=(dispatch)=>({
    venderBookings:(venderData)=>dispatch(venderBookings(venderData))


})


export default connect(mapStateToProps,mapDispatchToProps)(Requests)