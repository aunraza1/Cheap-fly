import React, { useEffect } from "react";
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
        ownerrName:"",
        hotelName: "",
        hotelLocation: "",
        hotelRatings:"",
        roomType:"",
        price:"",
        userId:"",
        userName: "",
        contactNo: null,
        days: null,
        checkInDate: '',
        checkOutDate:'',
        bookingStatus: false,
        cancelBooking: false,
    });

    const handleClose = () => {
        setDialogValue({
         ownerId: '',
         roomType:'',
        ownerrName:"",
        hotelName: "",
        hotelLocation: "",
        hotelRatings:"",
        price:"",
        userId:"",
        userName: "",
        contactNo: null,
        days: null,
        checkInDate: '',
        checkOutDate:'',
        bookingStatus: false,
        cancelBooking: false,
        });
        setToggleOpen(false);
        toggleValue(false);
    };
    useEffect(() => {
       
        setToggleOpen(openDialog);
        setDialogValue({
            ownerId: bookingValues?.ownerId,
            ownerName:bookingValues?.ownerName,
            hotelName: bookingValues?.hotelName,
            hotelLocation: bookingValues?.hotelLocation,
            hotelRatings:bookingValues?.hotelRatings,
            userID:userDetails.uid,
            userName:userDetails?.name ,
            contactNo: null,
            days: null,
            checkInDate: '',
            checkOutDate:'',
            bookingStatus: false,
            cancelBooking: false,
        })
    }, [openDialog])
    const handleSubmit = (event) => {
        event.preventDefault();
        //total amount
        optionValues(dialogValue)
        handleClose();
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
                       
                        <TextField
                            margin="dense"
                            id="purchasePrice"
                            required
                            value={dialogValue?.price}
                            label="Hourly Rate"
                            type="number"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue?.userName}
                            multiline={true}
                            required
                            label="User Name"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        
                        <TextField
                            margin="dense"
                            id="cost"
                            required
                            value={dialogValue?.price}
                            label="Price"
                            type="number"
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
                                    days: parseInt(event.target.value)
                                })
                            }
                            label="Days"
                            type="number"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        <h6>Check in Date</h6>
                        <TextField
                            margin="dense"
                            id="salePrice"
                            required
                            value={dialogValue.date}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    date: event.target.value
                                })
                            }
                            
                            
                            type="date"
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
       
          onChange={(e)=>setDialogValue({...dialogValue,price:parseInt(e.target.value[0]),roomType:e.target.value[1]})}
          label="Select Room"
          value={dialogValue?.roomType}
          
        >
       
          {bookingValues?.singlePrice ? <MenuItem value={[bookingValues?.singlePrice,"Single Room"]}>Single Room</MenuItem> : null }
          {bookingValues?.doublePrice ? <MenuItem value={[bookingValues?.doublePrice,"Double Room"]}>Double Room</MenuItem> : null }
          {bookingValues?.kingPrice ? <MenuItem value={[bookingValues?.kingPrice,"King Room"]}>King Size</MenuItem> : null }
          {bookingValues?.queenPrice ? <MenuItem value={[bookingValues?.queenPrice,"Queen Room"]}>Queen Size</MenuItem> : null }
        </Select>
      </FormControl>
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