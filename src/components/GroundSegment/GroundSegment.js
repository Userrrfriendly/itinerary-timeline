import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import { DriveEta as CarIcon } from "@material-ui/icons";
import JourneySegment from "../../containers/JourneySegmentContainer/JourneySegmentContainer";
import { DARKBLUE } from "../../helpers/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.light,
    display: "flex",
  },
  cardText: {
    lineHeight: 1,
    marginTop: "0.25rem",
  },
}));

export default function GroundSegment(props) {
  const classes = useStyles();

  return (
    <JourneySegment>
      <Paper className={classes.root}>
        <CarIcon fontSize='large' style={{ margin: "0 0.25rem" }} />
        <Typography
          // noWrap='false'
          variant='subtitle1'
          component='p'
          className={classes.cardText}>
          Pick up from <strong>{props.address}</strong>
        </Typography>
      </Paper>
    </JourneySegment>
  );
}
