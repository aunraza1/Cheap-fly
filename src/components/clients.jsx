import '../assets/style.css'
import logo1 from '../assets/images/sponsor-logo-1.png'
import logo2 from '../assets/images/sponsor-logo-2.png'
import logo3 from "../assets/images/sponsor-logo-3.png"
import logo4 from "../assets/images/sponsor-logo-4.png"
import logo5 from "../assets/images/sponsor-logo-5.png"
import logo6 from "../assets/images/sponsor-logo-6.png"

function Clients (){


    return(
        
     <>
<section id="mu-clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-clients-area">
                <h2>Sponsors</h2>
                {/* Start Clients brand logo */}
                <div className="mu-clients-slider">
                  <div className="mu-clients-single">
                    <img width={180} src={logo1} alt="Brand Logo" />
                  </div>
                  <div className="mu-clients-single">
                    <img width={180} src={logo2} alt="Brand Logo" />
                  </div>
                  <div className="mu-clients-single">
                    <img width={180} src={logo3} alt="Brand Logo" />
                  </div>
                  <div className="mu-clients-single">
                    <img width={180} src={logo4} alt="Brand Logo" />
                  </div>
                  <div className="mu-clients-single">
                    <img width={180} src={logo5} alt="Brand Logo" />
                  </div>
                  <div  className="mu-clients-single">
                    <img  width={180} src={logo6} alt="Brand Logo" />
                  </div>
                 
                </div>
                {/* End Clients brand logo */}
              </div>
            </div>
          </div>
        </div>
      </section>
     </>

    )

}
export default Clients