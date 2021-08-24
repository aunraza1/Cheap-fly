import React from 'react'
import { useEffect } from 'react'
import {getHotelsfromVendors} from '../store/actions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HotelDialog from './SharedComponent/hotelDialog';
import {
  Grid,
} from '@material-ui/core/'
import { useState } from 'react';

const useStyles = makeStyles(theme =>({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },

  media: {
    height: 200,
  },
}));

function HotelBooking({getHotelsfromVendors,hotelData,loggedUser}){
  const classes = useStyles();
  const [selectedHotel,setSelectedHotel]=useState()
  const [toggleOpen, setToggleOpen] = useState(false);
useEffect(()=>{
    getHotelsfromVendors()
  
},[])
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
        {hotelData && hotelData.map((v, i) => (
          <Grid item xs={12} sm={12} md={3} key={i}>
          <Card >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={v?.url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {`Hotel Name:${v?.hotelName}`}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {`Hotel Ratings:${v?.hotelRatings} ⭐`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" 
              onClick={()=>{ setSelectedHotel(hotelData[i]);  setToggleOpen(true)}}
              >
               Book Room
              </Button>

            </CardActions>
          </Card>
          </Grid>
        ))}

      </Grid>
      <HotelDialog optionValues={() => {
               setToggleOpen(false)
            }} toggleValue={(value) => { 
              
            setToggleOpen(value) 
            }} openDialog={toggleOpen} bookingValues={selectedHotel} userDetails={loggedUser} />
    </div>

  </>
)
}

const mapDispatchToProps=(dispatch)=>({
    getHotelsfromVendors:()=>dispatch(getHotelsfromVendors())

})

const mapStateToProps=(state)=>({
    hotelData:state.hotelData,
    loggedUser:state.loggedUser

})
export default connect(mapStateToProps,mapDispatchToProps)(HotelBooking)