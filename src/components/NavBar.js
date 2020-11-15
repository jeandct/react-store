import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './NavBar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    justifyContent: 'space-between',
    margin: '0px auto',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={classes.root}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/basket'>Basket</NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
