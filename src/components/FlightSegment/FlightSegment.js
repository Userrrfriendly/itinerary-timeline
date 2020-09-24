import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import { FlightTakeoff as FlightIcon } from "@material-ui/icons";
import JourneySegment from "../../containers/JourneySegmentContainer/JourneySegmentContainer";
import { DARKBLUE } from "../../helpers/colors";
import { timeStampToLocalTime } from "../../helpers/helpers";

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
  cardTopBottom: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: DARKBLUE,
  },
  cardCenter: {
    display: "flex",
    justifyContent: "center",
  },
  delay: {
    backgroundColor: "green",
  },
}));

export default function FlightSegment(props) {
  const classes = useStyles();

  return (
    <JourneySegment departure={props.departure}>
      <Paper className={classes.root}>
        <div className={classes.cardTopBottom}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            {props.detail.flight_number}
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            Boarding: {timeStampToLocalTime(props.detail.boarding)}
          </Typography>
        </div>
        <div className={classes.cardCenter}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            {props.origin.value}
          </Typography>
          <FlightIcon fontSize='large' style={{ margin: "0 0.25rem" }} />
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            {props.destination.value}
          </Typography>
        </div>

        <div className={classes.cardTopBottom}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            {props.detail.gate}
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            {props.detail.seat}
          </Typography>
          <div className={classes.delay}>
            <Typography
              variant='subtitle1'
              component='p'
              className={classes.cardText}>
              On Time
            </Typography>
          </div>
        </div>
      </Paper>
    </JourneySegment>
  );
}
