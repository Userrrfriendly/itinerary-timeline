import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import { FlightTakeoff as FlightIcon } from "@material-ui/icons";
import JourneySegmentContainer from "../../containers/JourneySegmentContainer/JourneySegmentContainer";
import { LIGHTBLUE } from "../../helpers/colors";
import { timeStampToLocalTime } from "../../helpers/helpers";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardText: {
    lineHeight: 1,
    marginTop: "0.25rem",
    padding: "0.25rem 0.25rem",
  },
  cardTextCenter: {
    lineHeight: 1,
    marginTop: "0.25rem",
    padding: "0 0.25rem",
    alignSelf: "center",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: LIGHTBLUE,
    borderTopLeftRadius: "0.25rem",
    borderTopRightRadius: "0.25rem",
  },
  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: LIGHTBLUE,
    borderBottomLeftRadius: "0.25rem",
    borderBottomRightRadius: "0.25rem",
  },
  cardCenter: {
    display: "flex",
    justifyContent: "center",
  },
  delay: {
    backgroundColor: "#00c400",
    borderBottomRightRadius: "0.25rem",
    paddingLeft: "0.25rem",
    paddingRight: "0.25rem",
  },
}));

export default function FlightSegment(props) {
  const classes = useStyles();

  return (
    <JourneySegmentContainer departure={props.departure}>
      <Paper className={classes.root}>
        <div className={classes.cardTop}>
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
            className={classes.cardTextCenter}>
            {props.origin.value}
          </Typography>
          <FlightIcon fontSize='large' style={{ margin: "0 0.25rem" }} />
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardTextCenter}>
            {props.destination.value}
          </Typography>
        </div>

        <div className={classes.cardBottom}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            {`Gate:${props.detail.gate}`}
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            {`Seat:${props.detail.seat}`}
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
    </JourneySegmentContainer>
  );
}
