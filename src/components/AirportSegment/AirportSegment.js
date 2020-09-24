import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import { LocalAirport as AirportIcon } from "@material-ui/icons";
import JourneySegment from "../../containers/JourneySegmentContainer/JourneySegmentContainer";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    // flexDirection: "column",
  },
  cardText: {
    lineHeight: 1,
    marginTop: "0.25rem",
  },
}));

export default function AirportSegment(props) {
  const classes = useStyles();

  return (
    <JourneySegment departure={props.departure}>
      <Paper className={classes.root}>
        <AirportIcon fontSize='large' style={{ margin: "0 0.25rem" }} />
        <Typography
          variant='subtitle1'
          component='p'
          className={classes.cardText}>
          {props.origin.value} Airport Terminal C{" "}
          <strong style={{ color: "red" }}>•Buzy</strong>
        </Typography>
      </Paper>
    </JourneySegment>
  );
}
