import React, { useEffect, useState } from "react";
import {
  Paper,
  makeStyles,
  Typography,
  CircularProgress,
} from "@material-ui/core/";
import { MOCKDATA } from "../../data/mockServerData";
import { airportCodeToName } from "../../helpers/helpers";
import SegmentFilter from "../../components/SegmentFilter/SegmentFilter";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#d3d3d3",
    minHeight: "calc(100vh - 70px)",
  },
  spinner: {
    marginTop: "40vh",
  },
}));

export default function Itinerary() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [segments, setSegments] = useState([]);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    /**Mocks an API call when component mounts */
    setTimeout(() => {
      setSegments(MOCKDATA.segments);
      setOrigin(MOCKDATA.origin_iata);
      setDestination(MOCKDATA.destination_iata);
      setLoading(false);
    }, Math.random() * 1500);
  }, []);

  console.log(origin, destination);
  /**
   * ✔️Load DATA On Mount
   ** ✔️Show Spinner when the DATA loads
   * ✔️Iterate through Segments
   * ✔️ saves response to state
   * ✔️Map through Segments and spit out JourneySegments based on segment TYPE(ground/airport/Flight)
   ** first one needs to know that it is the first one So it gets the dark dot at ProgressBar
   *
   ** Error Handling?
   ** Should I create a map for airport names -> airport code?
   */

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.paper}>
        {loading ? (
          <CircularProgress className={classes.spinner} />
        ) : (
          <>
            <div>
              <Typography variant='h4' component='h1' gutterBottom>
                {airportCodeToName(origin)} - {airportCodeToName(destination)}
              </Typography>
            </div>

            {segments.map(segment => (
              <SegmentFilter {...segment} key={segment.segment_id} />
            ))}
          </>
        )}
      </Paper>
    </div>
  );
}
