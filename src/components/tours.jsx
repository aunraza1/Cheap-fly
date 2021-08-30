import '../assets/style.css'
import Dubai from '../assets/images/dubai.jpg'
import  {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import{getTourData} from '../store/actions/index'







function Tours({reference,getTourData,tourData,loggedUser}){

useEffect(() => {
  getTourData()


},[])



const selectedTour=(selectedTour)=>{
  console.log(selectedTour)
  

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
                                <h3>{v.tourName}</h3>
                                <h4>{v.tourStay}</h4>
                                <span className="mu-price-tag">{`${v.tourPrice}/- PKR`}</span>
                               
                                <a href="#" onClick={()=>selectedTour(tourData[i])} className="mu-book-now-btn btn-success">Book Now</a>
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