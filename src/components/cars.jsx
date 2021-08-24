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
import { carBooking } from '../config/api'
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

function Cars({ getCars, carData, userData }) {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [bookingValue, setBookingValue] = useState();
  const [bookingData, setBookingData] = useState();
  const classes = useStyles();
  useEffect(() => {
    getCars()
  }, [])

  useEffect(()=>{
    carBooking(bookingData)
  },[bookingData])

 
  return (
    <>
      <div className={classes.rootDiv} style={{margin: '3%',}} >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {carData && carData.map((val, i) => (
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
            }} openDialog={toggleOpen} bookingValues={bookingValue} userDetails={userData} />
      </div>
      

    </>
  )

}

const mapDispatchToProps = (dispatch) => ({
  getCars: () => carFetch(dispatch),

})

const mapStateToProps = (state) => ({
  carData: state.carData,
  userData: state.loggedUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)