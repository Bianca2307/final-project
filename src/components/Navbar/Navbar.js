import React from "react";
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

import logo from '../../assets/logo.png';

import "../Navbar/Navbar.css";

function Navbar() {
 
  return(
    <AppBar position="fixed" className={'appBar'} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={'title'} color="inherit">
          <img src={logo} alt="Commerce.js" height="25px" className={'image'}/>
          Commerce.js
        </Typography>
        <div className={'button'}>
          <IconButton aria-label="Show cart" color="inherit">
            <Badge badgeContent={2} color="secondary"></Badge>
            <ShoppingCart />
          </IconButton>

        </div>
      </Toolbar>

    </AppBar>
    
  )
}
export default Navbar;