import React from 'react'
import '../assets/style.css';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { carFetch } from '../store/actions/index';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Loader from './loader'
import {Link} from 'react-router-dom'

import {
  Grid,
} from '@material-ui/core/';
import  CarDialog  from './SharedComponent/CarDialog';

const useStyles = makeStyles(theme =>({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },

  media: {
    height: 200,
  },
}));

function Cars({ getCars, carData, userData,venderData }) {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [bookingValue, setBookingValue] = useState();
  const [bookingData, setBookingData] = useState();
  const [searchArray,setSearchArray]=useState([])
  const [message,setMessage]=useState()
  const [messageColor,setColor]=useState('white')
  const classes = useStyles();
  useEffect(() => {
    getCars()
  }, [])


  const filterValue=(e)=>{

    var newArray=carData.filter((item)=>{
      if(item.hourlyRate <=parseInt(e.target.value)
       || item.carName.toUpperCase() == e.target.value.toUpperCase()
        || item.location.toUpperCase()==e.target.value.toUpperCase()){
        return true
       
      }
  
    })
    if(newArray.length==false){
  
  
    setMessage("Oops No Match Found!")
    setColor('red')
    // setTimeout(()=>{
    //    setMessage("")
    // },5000)
    }
    else{
      setMessage("Match Found!")
      setColor('green')
    //   setTimeout(()=>{
    //     setMessage("")
    //  },5000)
    }
  
    console.log(newArray)
    setSearchArray(newArray)
   
  
  }


 
  return (
    carData.length?
    <>
           <div className="mu-logo-area">
                {/* text based logo */}
                <Link to="/"className="mu-logo" ><span>Cheap Fly</span></Link>
                {/* Image based logo */}
                {/* <a class="mu-logo" href="index.html"><img src="assets/images/logo.jpg" alt="logo img"></a> */}
              </div>
         <div style={{width:700, height:100,margin:'0 auto'}} className="input-group">
        <input style={{marginTop:40,borderWidth:2,borderColor:'blue',borderRadius:20,height:50}} onChange={(e)=>filterValue(e)} type="search" className="form-control " placeholder="Search by Car,Price,and Location" aria-label="Search" aria-describedby="search-addon" />

      </div>
      <h4 style={{color:messageColor,textAlign:'center',fontFamily:'cursive'}}>{message}</h4>

      <div className={classes.rootDiv} style={{margin: '3%',}} >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >



  {searchArray.length? searchArray.map((val,i)=>{
          return(
            <Grid item xs={12} sm={8} md={3} key={i}>
            <Card >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={val?.url}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`Car Name: ${val?.carName}`}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`Car Segment: ${val?.carSegment}`}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`Location: ${val?.location}`}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`Hourly Rate: ${val?.hourlyRate}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>{ setBookingValue(searchArray[i]);  setToggleOpen(true)}}>
                  Rent A Car
                </Button>

              </CardActions>
            </Card>
            </Grid>
          )
          
        }):carData && carData.map((val, i) => (
          <Grid item xs={12} sm={8} md={3} key={i}>
          <Card >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={val?.url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`Car Name: ${val?.carName}`}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {`Car Segment: ${val?.carSegment}`}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {`Location: ${val?.location}`}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {`Hourly Rate: ${val?.hourlyRate}`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{ setBookingValue(carData[i]);  setToggleOpen(true)}}>
                Rent A Car
              </Button>

            </CardActions>
          </Card>
          </Grid>
        ))}
      
         
        </Grid>
        <CarDialog optionValues={(value) => {
               setToggleOpen(false)
               setBookingData(value)
              
            }} toggleValue={(value) => { 
              
            setToggleOpen(value) 
            }} openDialog={toggleOpen} bookingValues={bookingValue} userDetails={userData} venderData={venderData} />
      </div>
      

    </>
 :<Loader from="Cars" /> )

}

const mapDispatchToProps = (dispatch) => ({
  getCars: () => carFetch(dispatch),

})

const mapStateToProps = (state) => ({
  carData: state.carData,
  userData: state.loggedUser,
  venderData:state.venderData,
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)