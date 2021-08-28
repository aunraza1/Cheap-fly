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
  const classes = useStyles();
  useEffect(() => {
    getCars()
  }, [])


  const filterValue=(e)=>{

    var newArray=carData.filter((item)=>{
      if(item.hourlyRate <=parseInt(e.target.value)
       || item.carName == e.target.value
        || item.location==e.target.value){
        return true
       
      }
  
    })
    if(newArray.length==false){
  
  
    setMessage("Oops No Match Found!")
    setTimeout(()=>{
       setMessage("")
    },5000)
    }
    else{
      setMessage("Match Found!")
      setTimeout(()=>{
        setMessage("")
     },5000)
    }
  
    console.log(newArray)
    setSearchArray(newArray)
   
  
  }


 
  return (
    carData.length?
    <>
          <div style={{width:400}} className="input-group">
        <input onChange={(e)=>filterValue(e)} type="search" className="form-control rounded" placeholder="Search by Car,Price,and Location" aria-label="Search" aria-describedby="search-addon" />
        
      </div>
      <div>{message}</div>

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