import React, { useEffect, useReducer } from "react";
import {
  Paper,
  makeStyles,
  Typography,
  CircularProgress,
} from "@material-ui/core/";
import { MOCKDATA } from "../../data/mockServerData";
import { airportCodeToLocalName } from "../../helpers/helpers";
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

const initialState = {
  itinerary_id: null,
  first_name: null,
  middle_name: null,
  last_name: null,
  origin: null,
  destination: null,
  segments: [],
  loading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { ...initialState };
    case "loadData":
      return {
        ...state,
        itinerary_id: action.payload.itinerary_id,
        first_name: action.payload.traveler.first_name,
        middle_name: action.payload.traveler.middle_name,
        last_name: action.payload.traveler.last_name,
        origin: action.payload.origin_iata,
        destination: action.payload.destination_iata,
        segments: action.payload.segments,
        loading: false,
      };
    default:
      throw new Error();
  }
}

export default function Itinerary() {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    /**Mocks an API call when component mounts */
    setTimeout(() => {
      dispatch({ type: "loadData", payload: MOCKDATA });
    }, Math.random() * 1500);
  }, []);

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.paper}>
        {state.loading ? (
          <CircularProgress className={classes.spinner} />
        ) : (
          <>
            <div>
              <Typography variant='h4' component='h1' gutterBottom>
                {airportCodeToLocalName(state.origin)} -{" "}
                {airportCodeToLocalName(state.destination)}
              </Typography>
            </div>

            {state.segments.map(segment => (
              <SegmentFilter {...segment} key={segment.segment_id} />
            ))}
          </>
        )}
      </Paper>
    </div>
  );
}
