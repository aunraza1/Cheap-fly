import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HotelBooking from './vendor/hotels/hotel';
import CarBooking from './vendor/cars/car';


function VendorTab (){
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
        <Tab label="Hotel" />
        <Tab label="Rent A Car" />
      </Tabs>
    </Paper>
    {value==0?<HotelBooking/>:<CarBooking/>}
   
  
        </>
    )

}
export default VendorTab