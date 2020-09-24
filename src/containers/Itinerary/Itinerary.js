import React, { useEffect, Suspense, useState } from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core/";
import JourneySegment from "../JourneySegmentContainer/JourneySegmentContainer";
import GroundSegment from "../../components/GroundSegment/GroundSegment";
import AirportSegment from "../../components/AirportSegment/AirportSegment";
import FlightSegment from "../../components/FlightSegment/FlightSegment";
import { MOCKDATA } from "../../data/mockData";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#d3d3d3",
  },
}));

export default function Itinerary() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //mock API call
    setTimeout(() => {
      //   console.log(MOCKDATA);
      setLoading(false);
    }, Math.random() * 1500);
  }, []);
  /**
   * Load DATA On Mount
   ** Show Spinner when the DATA loads
   * Iterate through Segments
   * Map through Segments and spit out JourneySegments based on segment TYPE(ground/airport/Flight)
   ** first one needs to know that it is the first one So it gets the dark dot at ProgressBar
   *
   ** Error Handling?
   *
   */
  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.paper}>
        <div>
          <Typography variant='h4' component='h1' gutterBottom>
            Athens - Thessaloniki
          </Typography>
        </div>
        <JourneySegment />
        <GroundSegment address='Nikolaou Zwidi 13' />
        <GroundSegment address='Nikol aouNik olaouNi kolaouN Nikolaou ikolaouNik olaou Nikolaou Nikola ouNikolaou  Zwidi 13' />
        <AirportSegment />
        <FlightSegment />
      </Paper>
    </div>
  );
}
