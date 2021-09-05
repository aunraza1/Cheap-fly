import { useEffect, useState } from 'react';
import '../assets/style.css'
import { autocomplete } from 'air-port-codes-node';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
function Flights() {
  const [token, setToken] = useState();
  const [origin, setOrigin] = useState();
  const [flyingFrom, setFlyingFrom] = useState([]);
  const [flightVal, setFlightVal] = useState({
    flyingFrom: '',
    flyingTo: '',
    departureDate: '',
    adults: null,
    child: null,
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
       axios({
        method: "get",
        url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${flightVal?.flyingFrom}&destinationLocationCode=${flightVal?.flyingTo}&departureDate=${flightVal?.departureDate}&adults=${flightVal?.adults}&children=${flightVal?.child?flightVal?.child:0}&nonStop=true&currencyCode=${flightVal?.currency}&max=5`,
        headers: { "Authorization": `Bearer ${token}` },
    })
    .then((res)=>{
      console.log(res)
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Flights
