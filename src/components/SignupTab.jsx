import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignUpVendor from './signupVendor';
import Signup from './signup';
import {Link} from 'react-router-dom'
import Logo from '../assets/images/logo-removebg-preview.png'

function SignupTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>

    
      <div className="mt-5 mu-logo-area">
               <Link to="/" className="mu=logo"> 
              <img height="120"  width="120" src={Logo} />
              </Link>
      </div>
      <div id='login-div'>

      
        <Paper square >
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            style={{ backgroundColor: '	#F5F5F5' }}
            onChange={handleChange}
            aria-label="disabled tabs example"
            centered
          >
             <Tab label="User SignUp" />
             <Tab label="Vendor SignUp" />
          </Tabs>
        </Paper>

        {value==0?<Signup/>:<SignUpVendor/>}
      </div>
     


    </>
  )

}
export default SignupTab