import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginUser from './loginUser'
import LoginVendor from './loginVendor';


function LoginTab (){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <div id='login-div'>
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