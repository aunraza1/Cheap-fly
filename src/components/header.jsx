import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faHiking } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
import '../assets/style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import Logo from '../assets/images/logo-removebg-preview.png'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import {removeUser} from '../store/actions/index'



function Header({ reference, click, loggedUser, venderData,removeUser }) {


  

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
               <Link to="/" className="mu=logo"> 
              <img height="120"  width="120" src={Logo} />
              </Link>
              </div>
              {/* End center Logo */}
              <div className="mu-hero-top-info">
                <ul>
                
                  <li style={{marginTop: '-1%'}}>
                    <Dropdown  className="d-inline " autoClose="inside">
                      <Dropdown.Toggle color='#f50' id="dropdown-autoclose-inside">
                        <AccountCircleIcon fontSize='small' />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                      <Dropdown.Item><LockOpenIcon fontSize='small' /><span style={{ marginLeft: '5%' }}>{loggedUser != "" ? loggedUser.name : venderData != "" ? venderData.name : <Link to='signin'>Login</Link>}</span></Dropdown.Item>
                      {(loggedUser==""&&venderData=="")?
                      <Dropdown.Item><PersonIcon fontSize='small' /><Link to="SignUp">Create Account</Link></Dropdown.Item>:null} 
                      {loggedUser!==""?
                      <Dropdown.Item> <DataUsageIcon fontSize="small"/> <Link to="allBookings">My Bookings</Link></Dropdown.Item>
                      :venderData != ""?<Dropdown.Item> <EmailIcon fontSize="small"/> <Link to="requests">My Requests</Link></Dropdown.Item>:null}

                      {venderData!==""?
                        <Dropdown.Item> <BusinessCenterIcon fontSize='small'/> <Link to="/Vendor">Add Your Services</Link></Dropdown.Item>:null}
                        {(loggedUser!==""||venderData!=="")?
                        <Dropdown.Item><SettingsPowerIcon></SettingsPowerIcon><Link onClick={()=>removeUser()}>Logout</Link></Dropdown.Item>:null}
                      </Dropdown.Menu>
                    </Dropdown>

                  </li>

                  
                </ul>
              </div>
            </div>
          
            <div className="mu-hero-featured-area">
              <div className="mu-hero-featured-content">
               
                <h1 style={{marginTop:40,fontFamily:'monospace',color:'black'}} >WE PROVIDE WITH THE BEST</h1>
               
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

const mapDispatchToProps=(dispatch)=>({
  removeUser:()=>dispatch(removeUser())

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
