import { useEffect, useState } from 'react';
import Italy from '../assets/images/serene.jpg'
import '../assets/style.css'
import { autocomplete } from 'air-port-codes-node';

import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
function Flights() {
  const [token, setToken] = useState();
  const [result,setResult]=useState({})
  const [origin, setOrigin] = useState();
  const [flyingFrom, setFlyingFrom] = useState([]);
  const [show,setShow]=useState(false)
  const [flightVal, setFlightVal] = useState({
    flyingFrom: '',
    flyingTo: '',
    departureDate: '',
    adults: null,
    child: 0,
    class: '',
    currency: 'PKR',
  })
  useEffect(() => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', 'b5hlkyJj5z4mqkURsoG9AISMg7aTETpK');
    params.append('client_secret', 'e9fkGN4U6BeENo1u');

    axios({
      method: "post",
      url: "https://test.api.amadeus.com/v1/security/oauth2/token",
      data: params,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res?.data)
        setToken(res?.data?.access_token)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  // useEffect(()=>{
  //    axios({
  //       method: "get",
  //       url: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=KHI&destinationLocationCode=LHE&departureDate=2021-09-06&adults=1&nonStop=false&max=250",
  //       headers: { "Authorization": `Bearer ${token}` },
  //   })
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // },[origin])



  const onSelectTag = (e, value) => {
    setFlightVal({
      ...flightVal, flyingFrom: value?.code
    })
  }
  const onSelectTag2 = (e, value) => {
    setFlightVal({
      ...flightVal, flyingTo: value?.code
    })
  }
  const onInputChange = (e, value) => {
    axios({
      method: "get",
      url: `http://autocomplete.travelpayouts.com/places2?term=${value}&locale=en&types[]=city`,
    })
      .then((res) => {
        const value = res?.data;
        setFlyingFrom(value)

      })
      .catch((err) => {
        console.log(err)
      })
  }
  const checkFlight = (e) => {
    e.preventDefault();
    setShow(true)
       axios({
        method: "get",
        url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${flightVal?.flyingFrom}&destinationLocationCode=${flightVal?.flyingTo}&departureDate=${flightVal?.departureDate}&adults=${flightVal?.adults}&children=${flightVal?.child?flightVal?.child:0}&nonStop=true&currencyCode=${flightVal?.currency}&max=5`,
        headers: { "Authorization": `Bearer ${token}` },
    })
    .then((res)=>{
  console.log(res.data.data[0])
 setResult({res:res.data.data[0]})
    
    })
    .catch((err)=>{
      console.log(err)
    })
  }



  return (
  
    <div id="bookings" className="sections">
    
      <div className="sections-center">
        <div className="container">
          <div className="row">
            <div className="booking-forms">
              <form onSubmit={checkFlight}>
                {console.log(flightVal)}
                <div className="row" style={{ marginBottom: '3%' }}>
                  <div style={{ width: 300, marginLeft: '3%' }}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={flyingFrom.length > 0 ? flyingFrom : []}
                      onInputChange={onInputChange}
                      onChange={onSelectTag}
                      getOptionLabel={(option) => `${option?.name}, ${option?.code}`}
                      renderInput={(params) => <TextField {...params} style={{ backgroundColor: '#F8F8F8', borderRadius: 10, }} label="Flying From" color='secondary' />}
                    />
                  </div>
                  <div style={{ width: 300, marginLeft: '5%' }}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={flyingFrom.length > 0 ? flyingFrom : []}
                      onInputChange={onInputChange}
                      onChange={onSelectTag2}
                      getOptionLabel={(option) => `${option?.name}, ${option?.code}`}
                      renderInput={(params) => <TextField {...params} style={{ backgroundColor: '#F8F8F8', borderRadius: 10, }} label="Flying To" color='secondary' />}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Departing</span>
                      <input className="form-control" onChange={(e) => {
                        setFlightVal({
                          ...flightVal, departureDate: e.target.value
                        })
                      }} type="date" required style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Returning</span>
                      <input className="form-control" disabled={true} type="date" required />
                    </div>
                  </div>
                  <div style={{ alignSelf: 'center', justifySelf: 'center', }}>


                    <TextField
                      margin="dense"
                      id="margin"
                      required
                      value={flightVal?.adults}
                      onChange={(e) =>
                        setFlightVal({
                          ...flightVal, adults: parseInt(e.target.value)
                        })
                      }
                      label='Adults'
                      InputLabelProps={{
                        style: { color: 'red' },
                      }}
                      type="number"
                      color='secondary'
                      variant="outlined"
                      style={{ width: "40%", backgroundColor: '#F8F8F8', borderRadius: 10 }}

                    />



                    <TextField
                      margin="dense"
                      id="margin"
                      required
                      value={flightVal?.child}
                      onChange={(e) =>
                        setFlightVal({
                          ...flightVal, child: parseInt(e.target.value)
                        })
                      }
                      label='Child'
                      InputLabelProps={{
                        style: { color: 'red' },
                      }}
                      type="number"
                      color='secondary'
                      variant="outlined"
                      style={{ width: "40%", backgroundColor: '#F8F8F8', borderRadius: 10, marginLeft: '2%' }}

                    />

                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Travel class</span>
                      <select className="form-control" onChange={(e)=>{setFlightVal({
                          ...flightVal, class: e.target.value
                        })}}>
                        <option>Economy</option>
                        <option>Business</option>
                        <option>First</option>
                      </select>
                      <span className="select-arrow" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-btn">
                      <button className="submit-btn" type="submit">Show flights</button>
                    </div>
                  </div>
                  <div className="card w-75">
     
      </div>
                </div>
              </form>
     
            </div>
            {show?


            <div style={{borderWidth:2,borderStyle:'solid',borderColor:'black',marginTop:20,borderRadius:60}} className="card-body">
            
         
          <div className="row">
            <div className="col-md-1">
           <img src={Italy} height="50"  width="70" alt="" />
            </div>
          <div className="col-md-3  ">
            <p>{flightVal.flyingFrom}</p>
            
          </div>
          <div className="col-md-3">
            <p>{flightVal.flyingTo}</p>
          </div>
          <div className="col-md-2">
            <p>Duration</p>
          </div>
         
          <div className="col-md-1">
          <p>Stops</p>
          </div>
          <div className="col-md-1">
          <p>Airbus</p>
          </div>
          <div className="col-md-1">
          <p>Total</p>
          </div>
        
    
          </div>
          <div className="row">
          <div className="col-md-1">
          <p>PIA</p>
            </div>
          <div className="col-md-3  ">
            <p>{result?result.res?.itineraries[0].segments[0].departure.at:null}</p>
          </div>
          <div className="col-md-3">
          <p>{result?result.res?.itineraries[0].segments[0].arrival.at:null}</p>
          </div>
          <div className="col-md-2">
            <p>{result?result.res?.itineraries[0].segments[0].duration:null}</p>
          </div>
         
          <div className="col-md-1">
          <p>{result?result.res?.itineraries[0].segments[0].numberOfStops:null}</p>
          </div>
          <div className="col-md-1">
          <p>{result?result.res?.itineraries[0].segments[0].aircraft.code:null}</p>
          </div>
          <div className="col-md-1">
          <p> <b style={{fontSize:15}}>{result?result.res?.price.total+result.res?.price.currency:null}</b></p>
          </div>

         </div>
          <a href="#" className="btn btn-primary">Book</a>
          <a onClick={()=>setShow(false)} className="ml-2 btn btn-primary">Cancel</a>
  
        </div>:null}
          </div>
        </div>
      </div>
  
    </div>
  )
}
export default Flights
