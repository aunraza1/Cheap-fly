
import '../assets/style.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Header({reference,click,loggedUser,history}) {

  console.log(click)
  return (
   <>

    <header ref={reference} id="mu-hero">
        <div className="container">
          <div className="mu-hero-area">
            <div className="mu-hero-top">
              {/* Start center Logo */}
              <div className="mu-logo-area">
                {/* text based logo */}
                <a className="mu-logo" href="index.html"><span>Cheap Fly</span></a>
                {/* Image based logo */}
                {/* <a class="mu-logo" href="index.html"><img src="assets/images/logo.jpg" alt="logo img"></a> */}
              </div>
              {/* End center Logo */}
              <div className="mu-hero-top-info">
                <ul>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>{loggedUser!=""?loggedUser:"Please Login"}</span>
                  </li>
                 
                  <li>
                    <div className="mu-telephone">
              
                     <Link to="/vendor"> <span>Become a vendor</span></Link>
                    </div>
                  </li>
                  <li>
                    <div className="mu-telephone">
              
                      <Link to="/Signup"><span>Create Account</span></Link>
                    </div>
                  </li>
                  <li>
                    <div className="mu-telephone">
              
                      <Link to="/Signin"><span>Login</span></Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Start hero featured area */}
            <div className="mu-hero-featured-area">
              <div className="mu-hero-featured-content">
                <h2>Welcome to Cheap Fly </h2>
                <h1>WE PROVIDE WITH THE BEST</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut omnis beatae quam quibusdam facere expedita explicabo eaque non sit. Amet vitae exercitationem ad rerum consequuntur numquam magni nemo dolorem, itaque eius perferendis praesentium consequatur. Dolores, nihil, molestiae sunt tenetur aut similique nostrum deleniti amet minima. Esse magnam inventore, ea.</p>
                <Link  to="Flights" className="mu-book-now-btn">Lets Fly Cheap! </Link>
                <Link  to='bookcar'  className="mu-book-now-btn">Book Your Car!</Link>
                <Link   className="mu-book-now-btn">Need a place to saty ?!</Link> 
                <Link onClick={click} className="mu-book-now-btn">Bored ? Come Enjoy with us !</Link>
                <div className="mu-scrolldown-area">
                  <a href="#mu-about" className="mu-scrolldown" id="mu-scrolldown"><i className="fa fa-chevron-down" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            {/* End hero featured area */}
          </div>
        </div>
      </header>
   </>
  );
}


const mapStateToProps=(state)=>({
  loggedUser:state.loggedUser

})

export default  connect(mapStateToProps,null)(Header);

