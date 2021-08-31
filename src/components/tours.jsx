import '../assets/style.css'
import  {useState,useEffect,useRef} from 'react'
import {connect} from 'react-redux'
import{getTourData,} from '../store/actions/index'
import {applyBooking} from '../config/api'








function Tours({reference,getTourData,tourData,loggedUser}){
  const form =useRef(null)
  const [press,setPress]=useState(false)
  const [selectedTour,setSelectedTour]=useState({
    
    tourName:"",
    tourStartDate:"",
    tourStay:"",
    tourPrice:"",
    ownerId:"",
    amountPayable:"",
    numberOfPersons:"",
    userId:"",
    userName:"",
    bookingStatus:"",
    vendorRequestStatus:""
    
  })

useEffect(() => {
  getTourData()


},[])



const selectedBooking=(values,ownerId,form)=>{


  if(loggedUser!==""){

console.log(form)
    setPress(true)
    setSelectedTour({
      ...selectedTour,tourName:values.tourName,
      tourStartDate:values.tourStartDate,
      tourStay:values.tourStay,
      tourPrice:values.tourPrice,
      ownerId:ownerId,
      amountPayable:"",
      numberOfPersons:"",
      userId:loggedUser.uid,
      userName:loggedUser.name,
      bookingStatus:false+loggedUser.uid,
      vendorRequestStatus:false+ownerId
    })
    scrollToDiv(form)

  }
  else{
    alert("Please Login To Book Tour")
  }



  

}
const cancelBooking=()=>{
  setSelectedTour({
    ...selectedTour,
    tourName:"",
    tourPrice:"",
    tourStartDate:"",
    tourStay:"",
    ownerId:"",
    bookingStatus:"",
    vendorRequestStatus:"",
    numberOfPersons:"",
    amountPayable:"",
    userId:"",
    userName:""


  })
  setPress(false)
}


const addBooking=(e)=>{
  e.preventDefault()
applyBooking(selectedTour)

}
  const scrollToDiv= (ref) =>{
 
  window.scrollTo(0, ref.current.offsetTop);
  
 }
  return(

    <>
          
    
     <section ref={reference}  id="mu-featured-tours">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-featured-tours-area">
                <h2>Featured Tours</h2>
                <p className="mu-title-content"></p>
                {/* Start Featured Tours content */}
                <div className="mu-featured-tours-content">
                  
                

                  
                    <div className="row">
                   {tourData && tourData.map((v,i)=>{
                     return(
                            <div  className="col-md-4">
                            <div className="mu-featured-tours-single">
                              <img src={v.uri} alt="img"  height={250}  />
                              <div className="mu-featured-tours-single-info">
                                <h3 style={{fontFamily:'cursive'}}>{v.tourName}</h3>
                                <h4>{v.tourStay}</h4>
                                <h5 style={{fontWeight:'bold',fontFamily:'cursive'}}>{`Departure Date ${v.tourStartDate}`}</h5>
                                <span className="mu-price-tag">{`${v.tourPrice}/- PKR`}</span>
                                <a  onClick={()=>selectedBooking(tourData[i],tourData[i].ownerId,form)} className="mu-book-now-btn btn-success">Book Now</a>
                              </div>
                            </div>
                          
                          </div>
                     )

                   })}
             

                  </div>

                   

            
           
                </div>
              </div>
            </div>
          </div>
          <div ref={form}>
           {press? 
          <form  onSubmit={addBooking}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Tour Name</label>
          <input style={{width:'100%'}} type="text" disabled className="form-control" id="formGroupExampleInput" value={selectedTour?.tourName} placeholder="Tour" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Stay Duration</label>
          <input style={{width:'100%'}} disabled type="text" className="form-control" id="formGroupExampleInput2" value={selectedTour?.tourStay} placeholder="Stay Duration" />
        </div>
  
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Deparure Date</label>
          <input style={{width:'100%'}} disabled type="text" className="form-control" id="formGroupExampleInput2" value={selectedTour.tourStartDate} placeholder="Departure Date" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Number of Persons</label>
          <input  required onChange={(e)=>setSelectedTour({...selectedTour,numberOfPersons:e.target.value,amountPayable:e.target.value*selectedTour.tourPrice})} value={selectedTour?.numberOfPersons} style={{width:'100%'}}  type="number"  className="form-control" id="formGroupExampleInput2" placeholder="People" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Total Amount</label>
          <input style={{width:'100%'}} disabled type="number" required value={selectedTour?.amountPayable} className="form-control" id="formGroupExampleInput2" placeholder="Total Amount" />
        </div>
        <input  style={{	display: 'inline-block',backgroundcolor: 'green',textTransform: 'uppercase',fontSize: 18,padding: 10,height:45,paddingRight:20,borderRadius: 25,marginTop: 30}} className="ml-2 mu-book-now-btn btn-success" type="submit" value="Book"/>
        <input onClick={()=>cancelBooking()}  className="ml-2 mu-book-now-btn btn-danger" type="button" value="Cancel"/>
      </form> :null}
        </div>
        </div>
      </section>

     

      </>
   )
}


const mapStateToProps=(state)=>({
 tourData:state.tourData,
 loggedUser:state.loggedUser

}) 

const mapDispatchToProps=(dispatch)=>({
  getTourData:()=>dispatch(getTourData())

})
export default connect(mapStateToProps,mapDispatchToProps)(Tours)