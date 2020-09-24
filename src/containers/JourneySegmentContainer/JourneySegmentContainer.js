import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    width: "300px",
    // height: "120px",
    // minHeight: "150px",
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
    width: "1rem",
    height: "1rem",
    // margin: "1rem",
    backgroundColor: "#000",
  },
  left: {
    height: "100%",
    width: "20%",
    // backgroundColor: "pink",
  },
  progress: {
    width: "2px",
    minHeight: "50px",
    height: "100%",
    backgroundColor: "black",
    // margin: "0.25rem 0 0.25rem 0.3rem",
    marginLeft: "0.4rem",
    borderRadius: "1rem",
  },
  cardBottom: {
    width: "100%",
    height: "100%",
    // border: "1px solid red",
    display: "flex",
  },
  cardBottomLeft: {
    width: "20%",
    // height: "100%",
  },
  cardBottomRight: {
    width: "80%",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid black",
    width: "80%",
    height: "100%",
  },
  top: {
    // backgroundColor: "green",
    height: "20%",
    textAlign: "left",
    paddingLeft: "0.5rem",
  },
  bottom: {
    backgroundColor: "purple",
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    // height: "100%",
    backgroundColor: "#d3d3d3",
    minHeight: "100px",
    minWidth: "200px",
    display: "flex",
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
          <Typography variant='p' component='p' align='left'>
            17:40
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
