import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ScatterPlotSharpIcon from '@material-ui/icons/ScatterPlotSharp';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: '10px',
    backgroundColor: '#1123a5',
  },

  menuButton: {
    marginRight: theme.spacing(0),
    paddingLeft: '5px',
    paddingRight: '5px',
    color: 'white',


  },
  title: {
    flexGrow: 1,
  },
 
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} 
          aria-label="menu">
            <ScatterPlotSharpIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            WordStory
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
