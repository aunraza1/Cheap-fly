import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginUser from './loginUser'
import LoginVendor from './loginVendor';
import {Link} from 'react-router-dom'


function LoginTab (){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
      
        <div id='login-div'>

<div className="mu-logo-area">
                {/* text based logo */}
                <Link to="/"className="mu-logo" ><span>Cheap Fly</span></Link>
                {/* Image based logo */}
                {/* <a class="mu-logo" href="index.html"><img src="assets/images/logo.jpg" alt="logo img"></a> */}
              </div>
       <Paper square >
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        style={{backgroundColor: '	#F5F5F5'}}
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="User Login" />
        <Tab label="Vendor Login" />
      </Tabs>
    </Paper>
    
    {value==0?<LoginUser/>:<LoginVendor/>}
    </div>
    )

}
export default LoginTab