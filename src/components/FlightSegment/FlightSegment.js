import React from "react";
import { Paper, makeStyles, Typography, Chip } from "@material-ui/core";
import { FlightTakeoff as FlightIcon } from "@material-ui/icons";
import JourneySegment from "../../containers/JourneySegmentContainer/JourneySegmentContainer";
import { DARKBLUE } from "../../helpers/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    // backgroundColor: theme.palette.primary.light,
    display: "flex",
    flexDirection: "column",
  },
  cardText: {
    lineHeight: 1,
    marginTop: "0.25rem",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: DARKBLUE,
  },
  cardCenter: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function FlightSegment(props) {
  const classes = useStyles();

  return (
    <JourneySegment>
      <Paper className={classes.root}>
        <div className={classes.cardTop}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            A123
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            boarding: 8:30
          </Typography>
        </div>
        <div className={classes.cardCenter}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            Auth
          </Typography>
          <FlightIcon fontSize='large' style={{ margin: "0 0.25rem" }} />
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            SKG
          </Typography>
        </div>

        <div className={classes.cardTop}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            Gate13
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            Seat 12
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            style={{ border: "1px solid darkgreen", backgroundColor: "green" }}
            className={classes.cardText}>
            On Time
          </Typography>
        </div>
      </Paper>
    </JourneySegment>
  );
}
