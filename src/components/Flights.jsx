import { useEffect, useState } from "react";
import Italy from "../assets/images/serene.jpg";
import Collapse from "@material-ui/core/Collapse";
import "../assets/style.css";
import FlightsCard from "./SharedComponent/Flight/FlightsCard";
import { autocomplete } from "air-port-codes-node";
import moment from "moment";

import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
function Flights() {
  const [token, setToken] = useState();
  const [result, setResult] = useState({});
  const [origin, setOrigin] = useState();
  const [flyingFrom, setFlyingFrom] = useState([]);
  const [show, setShow] = useState(false);
  const [flightData, setFlightData] = useState();
  const [noFlights, setNoFlights] = useState(false);
  const [flightVal, setFlightVal] = useState({
    flyingFrom: "",
    flyingTo: "",
    departure: "",
    arrival: "",
    departureDate: "",
    adults: null,
    child: null,
    class: "",
    currency: "PKR",
  });
  useEffect(() => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", "b5hlkyJj5z4mqkURsoG9AISMg7aTETpK");
    params.append("client_secret", "e9fkGN4U6BeENo1u");

    axios({
      method: "post",
      url: "https://test.api.amadeus.com/v1/security/oauth2/token",
      data: params,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res?.data);
        setToken(res?.data?.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSelectTag = (e, value) => {
    setFlightVal({
      ...flightVal,
      flyingFrom: value?.code,
      departure: `${value?.name},${value?.code}`,
    });
  };
  const onSelectTag2 = (e, value) => {
    setFlightVal({
      ...flightVal,
      flyingTo: value?.code,
      arrival: `${value?.name},${value?.code}`,
    });
  };
  const onInputChange = (e, value) => {
    axios({
      method: "get",
      url: `http://autocomplete.travelpayouts.com/places2?term=${value}&locale=en&types[]=city`,
    })
      .then((res) => {
        const value = res?.data;
        setFlyingFrom(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkFlight = (e) => {
    e.preventDefault();
    setShow(false);
    setNoFlights(false);
    axios({
      method: "get",
      url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${
        flightVal?.flyingFrom
      }&destinationLocationCode=${flightVal?.flyingTo}&departureDate=${
        flightVal?.departureDate
      }&adults=${flightVal?.adults}&children=${
        flightVal?.child ? flightVal?.child : 0
      }&nonStop=true&currencyCode=${flightVal?.currency}&max=5`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        let json = [];
        if (res?.data?.data.length > 0) {
          res?.data?.data &&
            res?.data?.data.map((Val, i) => {
              let departDate = moment(
                res?.data?.data[i]?.itineraries[0]?.segments[0]?.departure?.at
              ).format("MMMM Do YYYY, h:mm a");
              let arrivalDate = moment(
                res?.data?.data[i]?.itineraries[0]?.segments[0]?.arrival?.at
              ).format("MMMM Do YYYY, h:mm a");
              let total = res?.data?.data[i]?.price?.base;
              let airLine = "";
              let airlineCode =
                res?.data?.data[i]?.itineraries[0]?.segments[0]?.carrierCode;
              for (const [key, value] of Object.entries(
                res?.data?.dictionaries?.carriers
              )) {
                if (key === airlineCode) {
                  airLine = value;
                }
              }
              let word = res?.data?.data[i]?.itineraries[0]?.duration;
              let duration = "";
              let interval;
              let hour = "";
              let minute = "";
              for (let i = 0; i <= word.length - 1; i++) {
                if (word.charAt(i) === "H") {
                  hour = word.slice(2, i + 1);
                  interval = i + 1;
                }
                if (word.charAt(i) === "M") {
                  minute = word.slice(interval, i + 1);
                }
                duration = hour + " " + minute;
              }
              json.push({
                flyingFrom: flightVal?.departure,
                flyingTo: flightVal?.arrival,
                adults: flightVal?.adults,
                child: flightVal?.child,
                class: flightVal?.class,
                departDate: departDate,
                arrivalDate: arrivalDate,
                total: total,
                airLine: airLine,
                duration: duration,
              });
            });
          setResult(res?.data);
          setFlightData(json);
          setShow(true);
        } else {
          setNoFlights(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setNoFlights(true);
      });
  };

  return (
    <div id="bookings" className="sections">
      <div className="sections-center">
        <div className="container">
          <div className="row">
            <div className="booking-forms">
              <form onSubmit={checkFlight}>
                {console.log(flightVal)}
                <div className="row" style={{ marginBottom: "3%" }}>
                  <div style={{ width: 300, marginLeft: "3%" }}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={flyingFrom.length > 0 ? flyingFrom : []}
                      onInputChange={onInputChange}
                      onChange={onSelectTag}
                      getOptionLabel={(option) =>
                        `${option?.name}, ${option?.code}`
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          style={{
                            backgroundColor: "#F8F8F8",
                            borderRadius: 10,
                          }}
                          label="Flying From"
                          color="secondary"
                        />
                      )}
                    />
                  </div>
                  <div style={{ width: 300, marginLeft: "5%" }}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={flyingFrom.length > 0 ? flyingFrom : []}
                      onInputChange={onInputChange}
                      onChange={onSelectTag2}
                      getOptionLabel={(option) =>
                        `${option?.name}, ${option?.code}`
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          style={{
                            backgroundColor: "#F8F8F8",
                            borderRadius: 10,
                          }}
                          label="Flying To"
                          color="secondary"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Departing</span>
                      <input
                        className="form-control"
                        onChange={(e) => {
                          setFlightVal({
                            ...flightVal,
                            departureDate: e.target.value,
                          });
                        }}
                        type="date"
                        required
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Returning</span>
                      <input
                        className="form-control"
                        disabled={true}
                        type="date"
                        required
                      />
                    </div>
                  </div>
                  <div style={{ alignSelf: "center", justifySelf: "center" }}>
                    <TextField
                      margin="dense"
                      id="margin"
                      required
                      value={flightVal?.adults}
                      onChange={(e) =>
                        setFlightVal({
                          ...flightVal,
                          adults: parseInt(e.target.value),
                        })
                      }
                      label="Adults"
                      InputLabelProps={{
                        style: { color: "red" },
                      }}
                      type="number"
                      color="secondary"
                      variant="outlined"
                      style={{
                        width: "40%",
                        backgroundColor: "#F8F8F8",
                        borderRadius: 10,
                      }}
                    />

                    <TextField
                      margin="dense"
                      id="margin"
                      required
                      value={flightVal?.child}
                      onChange={(e) =>
                        setFlightVal({
                          ...flightVal,
                          child: parseInt(e.target.value),
                        })
                      }
                      label="Child"
                      InputLabelProps={{
                        style: { color: "red" },
                      }}
                      type="number"
                      color="secondary"
                      variant="outlined"
                      style={{
                        width: "40%",
                        backgroundColor: "#F8F8F8",
                        borderRadius: 10,
                        marginLeft: "2%",
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Travel class</span>
                      <select
                        className="form-control"
                        onChange={(e) => {
                          setFlightVal({
                            ...flightVal,
                            class: e.target.value,
                          });
                        }}
                      >
                        <option></option>
                        <option>Economy</option>
                        <option>Business</option>
                        <option>First</option>
                      </select>
                      <span className="select-arrow" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-btn">
                      <button className="submit-btn" type="submit">
                        Show flights
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {console.log("result", result)}
              <Collapse in={show}>
                <div
                  className="row col-12"
                  style={{
                    width: "100%",
                    backgroundColor: "#F0F0F0",
                    padding: 10,
                    margin: 0,
                    borderRadius: 8,
                    height: 500,
                    overflowY: "auto",
                  }}
                >
                  {flightData &&
                    flightData.map((val, i) => (
                      <div key={i}
                        style={{
                          width: "100%",
                          borderRadius: 8,
                          marginBottom: 10,
                        }}
                      >
                        <FlightsCard val={val} />
                      </div>
                    ))}
                </div>
              </Collapse>
              <Collapse in={noFlights}>
                <div
                  className="row col-12"
                  style={{
                    width: "100%",
                    backgroundColor: "#F0F0F0",
                    padding: 10,
                    margin: 0,
                    borderRadius: 8,
                    height: 100,
                    overflowY: "auto",
                  }}
                >
                  <h1
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      padding: 0,
                      textAlign: "center",
                      marginLeft: "30%",
                    }}
                  >
                    No Flights Found
                  </h1>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Flights;
