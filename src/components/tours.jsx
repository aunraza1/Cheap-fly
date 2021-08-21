import '../assets/style.css'
import Dubai from '../assets/images/dubai.jpg'
import Thailand from '../assets/images/thailand.jpg'
import France from '../assets/images/france.jpg'
import Switzerland from '../assets/images/switzerland.jpg'
import Italy from '../assets/images/italy.jpg'
import England from '../assets/images/england.jpg'
import  {useState} from 'react'






function Tours({reference}){


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
                    <div className="col-md-4">
                      <div className="mu-featured-tours-single">
                        <img src={Thailand} alt="img" height={250}  />
                        <div className="mu-featured-tours-single-info">
                          <h3>Kashmir</h3>
                          <h4> 3 Days, 2 Nights</h4>
                          <span className="mu-price-tag">{`${tours.kashmirTour}/-PKR`}</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!</p>
                          <a href="#" className="mu-book-now-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mu-featured-tours-single">
                        <img src={France} alt="img"  height={250}  />
                        <div className="mu-featured-tours-single-info">
                          <h3>Hunza</h3>
                          <h4> 4 Days, 3 Nights</h4>
                          <span className="mu-price-tag">{`${tours.hunzaTour}/-PKR`}</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!</p>
                          <a href="#" className="mu-book-now-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mu-featured-tours-single">
                        <img src={Switzerland} height={250} alt="img" />
                        <div className="mu-featured-tours-single-info">
                          <h3>Skardu</h3>
                          <h4> 2 Days, 2 Nights</h4>
                          <span className="mu-price-tag">{`${tours.skarduTour}/-PKR`}</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!</p>
                          <a href="#" className="mu-book-now-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mu-featured-tours-single">
                        <img src={Italy} alt="img" height={250} />
                        <div className="mu-featured-tours-single-info">
                          <h3>Gilgit</h3>
                          <h4> 3 Days, 2 Nights</h4>
                          <span className="mu-price-tag">{`${tours.gilgitTour}/-PKR`}</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!</p>
                          <a href="#" className="mu-book-now-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mu-featured-tours-single">
                        <img src={England} alt="img"  height={250}  />
                        <div className="mu-featured-tours-single-info">
                          <h3>Muree</h3>
                          <h4> 2 Days, 1 Nights</h4>
                          <span className="mu-price-tag">{`${tours.mureeTour}/-PKR`}</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!</p>
                          <a href="#" className="mu-book-now-btn">Book Now</a>
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

export default Tours 