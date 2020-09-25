import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import { timeStampToLocalTime } from "../../helpers/helpers";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    width: "300px",
    margin: "auto",
    marginBottom: "0.5rem",
  },
  cardTop: {
    display: "flex",
    width: "100%",
    marginBottom: "0.25rem",
  },
  cardTopLeft: {
    width: "20%",
  },
  cardTopRight: {
    width: "80%",
  },
  bullet: {
    borderRadius: "100%",
    width: "0.75rem",
    height: "0.75rem",
    backgroundColor: "#000",
    marginTop: "0.4rem",
  },
  progress: {
    width: "2px",
    minHeight: "50px",
    height: "100%",
    backgroundColor: "black",
    marginLeft: "0.35rem",
    borderRadius: "1rem",
  },
  cardBottom: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  cardBottomLeft: {
    width: "20%",
  },
  cardBottomRight: {
    width: "80%",
  },
}));

export default function JourneySegmentContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.cardTop}>
        <div className={classes.cardTopLeft}>
          <div className={classes.bullet} />
        </div>
        <div className={classes.cardTopRight}>
          <Typography variant='body1' component='p' align='left'>
            {timeStampToLocalTime(props.departure)}
          </Typography>
        </div>
      </section>
      <section className={classes.cardBottom}>
        <div className={classes.cardBottomLeft}>
          <div className={classes.progress} />
        </div>
        <div className={classes.cardBottomRight}>{props.children}</div>
      </section>
    </div>
  );
}
