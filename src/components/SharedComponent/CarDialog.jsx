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
import {applyBooking} from '../../config/api'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme =>({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  
    media: {
      height: 200,
    },
  }));

 const CarDialog = ({ optionValues, openDialog, toggleValue, bookingValues, userDetails }) => {
    const classes = useStyles();
    const [open, setToggleOpen] = React.useState(false);
    const [dialogValue, setDialogValue] = React.useState({
        ownerId: '',
        companyName: "",
        carName: "",
        carSegment: "",
        hourlyRate: null,
        location: "",
        userId: '',
        userName: "",
        contactNo: null,
        duration: null,
        date: '',
        bookingStatus: false,
        cancelBooking: false,

    });

    const handleClose = () => {
        setDialogValue({
            ownerId: '',
            companyName: "",
            carName: "",
            carSegment: "",
            hourlyRate: null,
            location: "",
            userId: '',
            userName: "",
            contactNo: null,
            duration: null,
            date: '',
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
            companyName: bookingValues?.name,
            carName: bookingValues?.carName,
            carSegment: bookingValues?.carSegment,
            hourlyRate: bookingValues?.hourlyRate,
            location: bookingValues?.location,
            userId: userDetails?.uid,
            userName: userDetails?.name,
            contactNo: null,
            duration: null,
            date: '',
            bookingStatus: false+userDetails.uid,
            cancelBooking: false,

        })
    }, [openDialog])
    const handleSubmit = (event) => {
        event.preventDefault();
        optionValues({...dialogValue, totalAmount: dialogValue?.hourlyRate * dialogValue?.duration})
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
                    <DialogTitle id="form-dialog-title" style={{marginLeft: '35%'}}>Rent A Car</DialogTitle>
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
                            value={dialogValue.companyName}
                            multiline={true}
                            required
                            disabled={dialogValue?.companyName ? true : false}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    companyName: event.target.value
                                })
                            }
                            label="Company Name"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue.carName}
                            multiline={true}
                            required
                            disabled={dialogValue?.carName ? true : false}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    carName: event.target.value
                                })
                            }
                            label="Car Name"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                         <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue.carSegment}
                            multiline={true}
                            required
                            disabled={dialogValue?.carSegment ? true : false}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    carSegment: event.target.value
                                })
                            }
                            label="Car Segment"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                       <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue.location}
                            multiline={true}
                            required
                            disabled={dialogValue?.location ? true : false}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    location: event.target.value
                                })
                            }
                            label="Location"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                       
                        <TextField
                            margin="dense"
                            id="purchasePrice"
                            required
                            value={dialogValue.hourlyRate}
                            disabled={dialogValue?.hourlyRate ? true : false}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    hourlyRate: parseInt(event.target.value)
                                })
                            }
                            label="Hourly Rate"
                            type="number"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        <TextField
                            margin="dense"
                            id="description"
                            value={dialogValue.userName}
                            multiline={true}
                            disabled={dialogValue?.userName ? true : false}
                            required
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    userName: event.target.value
                                })
                            }
                            label="User Name"
                            type="text"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
                        
                        <TextField
                            margin="dense"
                            id="cost"
                            required
                            value={dialogValue.contactNo}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    contactNo: parseInt(event.target.value)
                                })
                            }
                            label="Contact No"
                            type="number"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />

                        <TextField
                            margin="dense"
                            id="margin"
                            required
                            value={dialogValue.duration}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    duration: parseInt(event.target.value)
                                })
                            }
                            label="Duration (Hours)"
                            type="number"
                            variant="outlined"
                            style={{ width: "60%" }}

                        />
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
export default CarDialog