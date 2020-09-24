import React from "react";
import GroundSegment from "../GroundSegment/GroundSegment";
import AirportSegment from "../AirportSegment/AirportSegment";
import FlightSegment from "../FlightSegment/FlightSegment";

export default function SegmentFilter(props) {
  // console.log(props);
  switch (props.type) {
    case "GROUND":
      return <GroundSegment {...props} />;
    case "AIRPORT":
      return <AirportSegment {...props} />;
    case "FLIGHT":
      return <FlightSegment {...props} />;
    default:
      return (
        <h5>
          ...oops something went wrong with this segment
          <span role='img' aria-label=''>
            🥵
          </span>
          Please resubmit the data.
        </h5>
      );
  }
}
