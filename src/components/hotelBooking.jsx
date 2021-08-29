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
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo-removebg-preview.png'
import Loader from './loader'
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

function HotelBooking({getHotelsfromVendors,hotelData,loggedUser,venderData}){
  const classes = useStyles();
  const [selectedHotel,setSelectedHotel]=useState()
  const [toggleOpen, setToggleOpen] = useState(false);
  const [searchArray,setSearchArray]=useState([])
  const [message,setMessage]=useState()
  const [messageColor,setColor]=useState('white')
useEffect(()=>{
    getHotelsfromVendors()
  
},[])


const filterValue=(e)=>{

  var newArray=hotelData.filter((item)=>{
    if(item.singlePrice <=parseInt(e.target.value)
     || item.hotelRatings == parseInt(e.target.value)
      || item.hotelLocation.toUpperCase()==e.target.value.toUpperCase()){
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
  
  hotelData.length?
  <>
          <div className="mu-logo-area">
               <Link to="/" className="mu=logo"> 
              <img height="120"  width="120" src={Logo} />
              </Link>
              </div>
      
      <div style={{width:700, height:100,margin:'0 auto'}} className="input-group">
        <input style={{marginTop:40,borderWidth:2,borderColor:'blue',borderRadius:20,height:50}} onChange={(e)=>filterValue(e)} type="search" className="form-control " placeholder="Search by Price,Ratings,and Location" aria-label="Search" aria-describedby="search-addon" />

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
      
        {searchArray.length? searchArray.map((v,i)=>{
          return(
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
                        onClick={()=>{ setSelectedHotel(searchArray[i]);  setToggleOpen(true)}}
                        >
                         Book Room
                        </Button>
          
                      </CardActions>
                    </Card>
                    </Grid>
          )
          
        }):hotelData && hotelData.map((v, i) => (
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
            }} openDialog={toggleOpen} bookingValues={selectedHotel} userDetails={loggedUser} venderDetail={venderData} />
    </div>

  </>
  :
 <Loader from="Hotels"/>
 
)
}

const mapDispatchToProps=(dispatch)=>({
    getHotelsfromVendors:()=>dispatch(getHotelsfromVendors())

})

const mapStateToProps=(state)=>({
    hotelData:state.hotelData,
    loggedUser:state.loggedUser,
    venderData:state.venderData,

})
export default connect(mapStateToProps,mapDispatchToProps)(HotelBooking)