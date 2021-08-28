import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faHiking } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
import '../assets/style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


function Header({ reference, click, loggedUser, venderData }) {




  useEffect(() => {
    console.log("LOGGED_USER", loggedUser)
    console.log("VENDOR_DATA", venderData)

  })
  const history = useHistory();
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
                <Link to="/"className="mu-logo" ><span>Cheap Fly</span></Link>
                {/* Image based logo */}
                {/* <a class="mu-logo" href="index.html"><img src="assets/images/logo.jpg" alt="logo img"></a> */}
              </div>
              {/* End center Logo */}
              <div className="mu-hero-top-info">
                <ul>
                   <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>{loggedUser != "" ? loggedUser.name : "Please Login"}</span>
                  </li>

                  <li>
                    <div className="mu-telephone">

                      <Link to="/Vendor"> <span>Become a vendor</span></Link>
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
                  <li style={{marginTop: '-1%'}}>
                    <Dropdown  className="d-inline " autoClose="inside">
                      <Dropdown.Toggle color='#f50' id="dropdown-autoclose-inside">
                        <AccountCircleIcon fontSize='small' />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item><PersonIcon fontSize='small' /><span style={{ marginLeft: '5%' }}>{loggedUser != "" ? loggedUser.name : venderData != "" ? venderData.name : "Please Login"}</span></Dropdown.Item>
                        <Dropdown.Item><NotificationsNoneIcon fontSize='small' />{loggedUser != "" ? <Link to="/allbookings"><span style={{ marginLeft: '5%' }}>My Bookings</span></Link> : venderData != "" ? <Link to="/requests"><span style={{ marginLeft: '5%' }}>My Requests</span></Link> : <span style={{ marginLeft: '5%' }}>No Request</span>}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </li>

                  
                </ul>
              </div>
            </div>
          
            <div className="mu-hero-featured-area">
              <div className="mu-hero-featured-content">
                <h2>Welcome to Cheap Trip </h2>
                <h1>WE PROVIDE WITH THE BEST</h1>
               
               <div style={{display:'flex',justifyContent:'space-evenly'}} >

                <div className="my-why-us-single-icon">
                  <FontAwesomeIcon onClick={()=>history.push('Flights')} icon={faPlane} color="blue" />
                 
                 
                </div>

                <div className="my-why-us-single-icon">
                  <FontAwesomeIcon icon={faBed} color="green"onClick={()=>history.push('hotelBooking')} />
                </div>

                <div className="my-why-us-single-icon">
                  <FontAwesomeIcon icon={faCar} color="red" onClick={()=>history.push('bookcar')} />
                </div>

                <div className="my-why-us-single-icon" onClick={()=>click()}>
                  <FontAwesomeIcon icon={faHiking} color="orange" />
                </div>
                </div>
          
       
                <div className="mu-scrolldown-area">
                  <a href="#mu-about" className="mu-scrolldown" id="mu-scrolldown"><i className="fa fa-chevron-down" aria-hidden="true" /></a>
                </div>
              </div>
            </div>


            
          </div>
        </div>
      </header>
     
    </>
  );
}


const mapStateToProps = (state) => ({
  loggedUser: state.loggedUser,
  venderData: state.venderData

})

export default connect(mapStateToProps, null)(Header);
