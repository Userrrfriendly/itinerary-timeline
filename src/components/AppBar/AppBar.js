import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core/";
import { ChevronLeft as BackIcon } from "@material-ui/icons/";
import { DARKBLUE } from "../../helpers/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: DARKBLUE,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <BackIcon fontSize='large' />
          </IconButton>
          <Typography variant='h6' className={classes.title} align='left'>
            Overview
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
