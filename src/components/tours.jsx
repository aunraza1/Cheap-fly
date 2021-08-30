import '../assets/style.css'
import Dubai from '../assets/images/dubai.jpg'
import Thailand from '../assets/images/thailand.jpg'
import France from '../assets/images/france.jpg'
import Switzerland from '../assets/images/switzerland.jpg'
import Italy from '../assets/images/italy.jpg'
import England from '../assets/images/england.jpg'
import  {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import{getTourData} from '../store/actions/index'






function Tours({reference,getTourData}){

useEffect(() => {
  getTourData()

}, [getTourData])
const [tours]=useState({
    swatTour:25000,
    kashmirTour:30000,
    hunzaTour:45000,
    skarduTour:20000,
    gilgitTour:27000,
    mureeTour:10000
})



  return(

    <>
          
    
     <section ref={reference}  id="mu-featured-tours">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-featured-tours-area">
                <h2>Domestic Tours</h2>
                <p className="mu-title-content"></p>
                {/* Start Featured Tours content */}
                <div className="mu-featured-tours-content">
                 
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mu-featured-tours-single">
                        <img src={Dubai} alt="img"  height={250}  />
                        <div className="mu-featured-tours-single-info">
                          <h3>Sawat</h3>
                          <h4> 2 Days, 3 Nights</h4>
                          <span className="mu-price-tag">{`${tours.swatTour}/-PKR`}</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!</p>
                          <a href="#"  className="mu-book-now-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
            
         
        
          
        
                  </div>
                </div>
                {/* End Featured Tours content */}
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
   )
}



const mapDispatchToProps=(dispatch)=>({
  getTourData:()=>dispatch(getTourData())

})
export default connect(null,mapDispatchToProps)(Tours)