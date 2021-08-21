import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed,faPlane,faBus } from '@fortawesome/free-solid-svg-icons'


function WhyUs (){

    return(
        <>

         {/* Start Why Us */}
      <section id="mu-why-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-why-us-area">
                <h2>Why Us?</h2>
                <div className="mu-why-us-content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mu-why-us-single">
                        <div className="my-why-us-single-icon">
                        <FontAwesomeIcon icon={faBed}/>
                        </div>
                        <h3>Luxurious Hotels</h3>
                        <p>We provide with Luxurious hotels to our customers,we have different stay packages according to customer's convenience </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mu-why-us-single">
                        <div className="my-why-us-single-icon">
                        <FontAwesomeIcon icon={faBus}/>
                        </div>
                        <h3>Best Transport Sevices</h3>
                        <p>We Provide our customers with the best and Luxurious Transport facilities,We ensure our customers security.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mu-why-us-single">
                        <div className="my-why-us-single-icon">
                        <FontAwesomeIcon icon={faPlane}/>
                        </div>
                        <h3>Cheapest Flying Fares</h3>
                        <p>We guarantee our customers with the cheapest flying fare we offer discounts for return tickets and group tours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Why Us */}
        </>
    )

}
export default WhyUs