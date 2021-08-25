import React, { useEffect ,useState} from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {applyBooking} from '../../config/api'


const useStyles = makeStyles(theme =>({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  
    media: {
      height: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

 const HotelDialog = ({ optionValues, openDialog, toggleValue, bookingValues, userDetails }) => {
    const classes = useStyles();
    const [open, setToggleOpen] = React.useState(false);
    const [dialogValue, setDialogValue] = React.useState({
        ownerId: '',
        ownerName:"",
        hotelName: "",
        hotelLocation: "",
        hotelRatings:"",
        price:"No Room Selected",
        userId:"",
        userName: "",
        days: null,
        roomType:null,
        checkInDate: null,
        bookingStatus: false,
        cancelBooking: false,
        amountPayable:"0"
    });
   

    const handleClose = () => {
        setDialogValue({
            ownerId: '',
            ownerName:"",
            hotelName: "",
            hotelLocation: "",
            hotelRatings:"",
            price:"",
            userId:"",
            userName: "",
            days: null,
            roomType:null,
            checkInDate: null,
            bookingStatus: false,
            cancelBooking: false,
            amountPayable:"0"
        });
        setToggleOpen(false);
        toggleValue(false);
    };
    useEffect(() => {
       
        setToggleOpen(openDialog);
        setDialogValue({...dialogValue,
            ownerId: bookingValues?.ownerId,
            ownerName:bookingValues?.ownerName,
            hotelName: bookingValues?.hotelName,
            hotelLocation: bookingValues?.hotelLocation,
            hotelRatings:bookingValues?.hotelRatings,
            userId:userDetails.uid,
            userName:userDetails?.name ,
            days: null,
            roomType:"",
            checkInDate: "",
            bookingStatus: false+userDetails?.uid,
            cancelBooking: false,
            amountPayable:"0"
        })
    }, [openDialog])
    const handleSubmit = (event) => {
        event.preventDefault();
        optionValues(dialogValue)
        handleClose();
        applyBooking(dialogValue)

  


    };




    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title" style={{marginLeft: '35%'}}>Book Room</DialogTitle>
                    <Card >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={bookingValues?.url}
                  title="Contemplative Reptile"
                />
                </CardActionArea>
                </Card>
                    <DialogContent>
                    <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue?.hotelName}
                            multiline={true}
                            required
                            disabled={dialogValue?.hotelName? true :false}
                            label="Hotel Name"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue?.hotelLocation}
                            disabled={dialogValue?.hotelLocation?true:false}
                            multiline={true}
                            required
                            label="Hotel Location"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                         <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue?.hotelRatings}
                            disabled={dialogValue?.hotelRatings?true:false}
                            multiline={true}
                            required
                            label="Ratings(Stars)"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                       <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue?.userName}
                            disabled={dialogValue?.hotelLocation?true:false}
                            multiline={true}
                            required
                            label="User Name"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        <div>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Room</InputLabel>
        <Select
        style={{width:"250%"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={(e)=>setDialogValue({...dialogValue,price:e.target.value[0],roomType:e.target.value[1]})}
          label="Select Room"
          value={bookingValues}
          required
          
        >
       
          {bookingValues?.singlePrice ? <MenuItem value={[bookingValues?.singlePrice,"Single Room"]}>Single Room</MenuItem> : null }
          {bookingValues?.doublePrice ? <MenuItem value={[bookingValues?.doublePrice,"Double Room"]}>Double Room</MenuItem> : null }
          {bookingValues?.kingPrice ? <MenuItem value={[bookingValues?.kingPrice,"King Room"]}>King Size</MenuItem> : null }
          {bookingValues?.queenPrice ? <MenuItem value={[bookingValues?.queenPrice,"Queen Room"]}>Queen Size</MenuItem> : null }
        </Select>
      </FormControl>
      </div>
                       
                 
                
                        
                      <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue?.price}
                            disabled={dialogValue?.hotelRatings?true:false}
                            multiline={true}
                            required
                            label="Price"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />

                        <TextField
                            margin="dense"
                            id="margin"
                            required
                            value={dialogValue?.days}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    days: parseInt(event.target.value),
                                    amountPayable:parseInt(event.target.value)*dialogValue.price
                                })
                            }
                            label="Days"
                            type="number"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        <div style={{marginTop:20}}>
                        
                        <TextField
                        name="someDate"
                        label="Check in Date"
                        InputLabelProps={{ shrink: true, required: true }}
                        required
                        type="date"
                        value={dialogValue?.checkInDate}
                        onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    checkInDate: event.target.value
                                })
                             }
                            
                            
                            type="date"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        </div>

                        <div style={{marginTop:10}}>

                           <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue.amountPayable}
                            disabled={dialogValue?.hotelRatings?true:false}
                            multiline={true}
                            required
                            label="Amount Payable"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        </div>
     
                      
    
    


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Rent
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>)
}


export default HotelDialog