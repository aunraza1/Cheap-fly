import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignUpVendor from './signupVendor';
import Signup from './signup';


function SignupTab (){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <>
       <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="User SignUp" />
        <Tab label="Vendor SignUp" />
      </Tabs>
    </Paper>
    {value==0?<Signup/>:<SignUpVendor/>}
   
  
        </>
    )

}
export default SignupTab