import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import { DriveEta as CarIcon } from "@material-ui/icons";
import JourneySegmentContainer from "../../containers/JourneySegmentContainer/JourneySegmentContainer";
import { DARKBLUE } from "../../helpers/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: DARKBLUE,
    display: "flex",
  },
  cardText: {
    lineHeight: 1,
    marginTop: "0.25rem",
    color: "#fff",
  },
  icon: {
    margin: "0 0.25rem",
    color: "#fff",
  },
}));

export default function GroundSegment(props) {
  const classes = useStyles();
  return (
    <JourneySegmentContainer departure={props.departure}>
      <Paper className={classes.root}>
        <CarIcon fontSize='large' className={classes.icon} />
        <Typography
          gutterBottom
          variant='subtitle1'
          component='p'
          className={classes.cardText}>
          Pick up from <strong>{props.origin.value}</strong>
        </Typography>
      </Paper>
    </JourneySegmentContainer>
  );
}
