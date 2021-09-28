import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1000,
  },
  image: {
    width: 100,
    height: 70,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function FlightsCard({ val }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://www.ch-aviation.com/images/stockPhotos/6688/8b8df06f35ad303fe0be2385021e3818850ec5f8.jpg"
              />
            </ButtonBase>
            <Typography
              style={{ fontWeight: "bold" }}
              variant="body2"
              gutterBottom
            >
              {val?.airLine}
            </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="row" spacing={1}>
              <Grid item xs>
                <Typography
                  style={{ color: "#0071cc", fontWeight: "800" }}
                  gutterBottom
                  variant="subtitle1"
                >
                  Departure:
                </Typography>
                <Typography
                  style={{ fontWeight: "bold", fontSize: 18 }}
                  variant="body2"
                  gutterBottom
                >
                  {val?.flyingFrom}
                </Typography>
                <Typography
                  style={{ fontWeight: "700" }}
                  variant="body2"
                  color="textSecondary"
                >
                  {val?.departDate}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography
                  style={{ color: "#0071cc", fontWeight: "800" }}
                  gutterBottom
                  variant="subtitle1"
                >
                  Arrival:
                </Typography>
                <Typography
                  style={{ fontWeight: "bold", fontSize: 18 }}
                  variant="body2"
                  gutterBottom
                >
                  {val?.flyingTo}
                </Typography>
                <Typography
                  style={{ fontWeight: "700" }}
                  variant="body2"
                  color="textSecondary"
                >
                  {val?.arrivalDate}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography
                  style={{ fontWeight: "800" }}
                  gutterBottom
                  variant="subtitle1"
                >
                  Class: {val?.class}
                </Typography>
                <Typography
                  style={{ fontWeight: "800" }}
                  variant="body2"
                  gutterBottom
                >
                  Duration: {val?.duration}
                </Typography>
                <Typography
                  style={{ fontWeight: "700" }}
                  Typography
                  variant="body2"
                  color="textSecondary"
                >
                  Stops: Nonstop
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography style={{ fontWeight: "800" }} variant="subtitle1">
                Adults: {val?.adults}
              </Typography>
              <Typography style={{ fontWeight: "800" }} variant="subtitle1">
                Child: {val?.child}
              </Typography>
              <Typography
                style={{ color: "#dc3545", fontWeight: "800" }}
                variant="subtitle1"
              >
                Total: {val?.total} PKR
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
