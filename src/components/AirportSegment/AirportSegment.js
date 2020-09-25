import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import { LocalAirport as AirportIcon } from "@material-ui/icons";
import JourneySegmentContainer from "../../containers/JourneySegmentContainer/JourneySegmentContainer";
import { terminalBusinessLevel } from "../../helpers/helpers";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.light,
    display: "flex",
  },
  textContainer: {
    display: "flex",
    flexFlow: "column",
    textAlign: "center",
    width: "100%",
  },
  cardText: {
    lineHeight: 1,
    marginTop: "0.25rem",
  },
}));

const TerminalBusiness = ({ busyness_index }) => {
  const busyness = terminalBusinessLevel(busyness_index);
  switch (busyness) {
    case "busy":
      return <strong style={{ color: "red" }}>•{busyness}</strong>;
    case "slightly busy":
      return <strong style={{ color: "darkorange" }}>•{busyness}</strong>;
    case "quiet":
      return <strong style={{ color: "green" }}>•{busyness}</strong>;
    default:
      break;
  }
};

export default function AirportSegment(props) {
  const classes = useStyles();

  return (
    <JourneySegmentContainer departure={props.departure}>
      <Paper className={classes.root}>
        <AirportIcon fontSize='large' style={{ margin: "0 0.25rem" }} />
        <div className={classes.textContainer}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            {`${props.origin.value} ${props.origin.type}`}
          </Typography>
          <Typography
            align='center'
            variant='subtitle1'
            component='p'
            className={classes.cardText}>
            {`Terminal:  ${props.detail.terminal} `}
            <TerminalBusiness busyness_index={props.detail.busyness_index} />
          </Typography>
        </div>
      </Paper>
    </JourneySegmentContainer>
  );
}

/**
 * We don't get any data about the Terminal from the original mock data,
 * In theory this info should come from the server
 * so I took the liberty and added an extra property ('terminal') in the second segment -->
 * detail: { busyness_index: 10, terminal: "C",}
 */
