import React, { useEffect, useState } from "react";
import {
  Paper,
  makeStyles,
  Typography,
  CircularProgress,
} from "@material-ui/core/";
import { MOCKDATA } from "../../data/mockData";
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

  useEffect(() => {
    /**Mocks an API call when component mounts */
    setTimeout(() => {
      setLoading(false);
      setSegments(MOCKDATA.segments);
    }, Math.random() * 1500);
  }, []);

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
                Athens - Thessaloniki
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
