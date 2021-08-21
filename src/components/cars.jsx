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
import {
  Grid,
} from '@material-ui/core/'

const useStyles = makeStyles(theme =>({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },

  media: {
    height: 200,
  },
}));

function Cars({ getCars, carData }) {
  const classes = useStyles();
  useEffect(() => {
    getCars()
  }, [])
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
            <Grid item xs={12} sm={12} md={3} key={i}>
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
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Rent A Car
                </Button>

              </CardActions>
            </Card>
            </Grid>
          ))}

        </Grid>
      </div>

    </>
  )

}

const mapDispatchToProps = (dispatch) => ({
  getCars: () => carFetch(dispatch),

})

const mapStateToProps = (state) => ({
  carData: state.carData,

})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)