import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  makeStyles,

} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
// import LoginIcon from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
// import { ShoppingCart } from "@material-ui/icons";
import DrawerComp from "./Drawer";
import  './navbar.css'
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";



const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  
    const { totalItems } = useCart();

  return (
    <React.Fragment >
      <AppBar sx={{ background: "#AA1E00"}} position="static" className='navbarmui'>
        <Toolbar>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
          <Typography sx={{ fontSize: "1.8rem", paddingLeft: "10px" }}>
                Shoppee
          </Typography>
          {isMatch ? (
            <>
              {/* <Typography sx={{ fontSize: "1.8rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography> */}
              <Link className="muiLinkIcon" to="/checkout" sx={{ marginLeft: "10px" }} variant="contained">
              <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCartIcon/>
                  </Badge>
              </Link>
              <DrawerComp />
            </>
          ) : (
            <>
              <nav
                // sx={{ marginLeft: "40%" }}
                // indicatorColor="secondary"
                // textColor="inherit"
                // value={value}
                // onChange={(e, value) => setValue(value)}
                className="muiTabs"
              >
                <Link to="/" className="muiTabLink" >
                  {/* <Tab label="Home" /> */}
                  Home
                </Link>
                <Link to="/products" className="muiTabLink" >
                  {/* <Tab label="Products" /> */}
                  Products
                </Link>
                <Link to="/about" className="muiTabLink" >
                  {/* <Tab label="About Us" /> */}
                  About Us
                </Link>
                <Link to="/contact" className="muiTabLink" >
                  {/* <Tab label="Contact" /> */}
                  Contact
                </Link>
                {/* <div className="iconLink"> */}
                <Link to="/login" className="muiLinkIcon" >
                  <PersonIcon/>
                </Link> 
                  <Link to="/checkout" className="muiLinkIcon">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCartIcon/>
                  </Badge>
                </Link> 
              {/* </div> */}
              </nav>

              
             {/* <div className="muiAccountLink">
              <Link className="muiLink" sx={{ marginLeft: "10px" }} variant="contained">
                Login
              </Link>
              <Link className="muiLink" sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Link>
              </div> */}
              
            </>
          )}
        </Toolbar>
      </AppBar>
     </React.Fragment>
  );
};

export default Navbar;









// import React, {useState} from 'react'
// import  './navbar.css'
// import { Link } from "react-router-dom";
// import { useCart } from "react-use-cart";
// import { Badge } from "@material-ui/core";
// import { ShoppingCart } from "@material-ui/icons";

// const Navbar = () => {

//   const { totalItems } = useCart();
//   const [active, setActive] = useState('nav__menu');
//   const [toggleIcon, setToggleIcon] = useState('nav__toggler');


//   const navToggler = () => {
//     active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')
    
//     // toggler icon 

//     toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
//   }
//   return (
//     <nav className="nav__bar">
//       <a href="" className='nav__logo'>LOGO</a>
//       <ul className={active}>
//         <li className='nav__item'><a href="" className='nav__link'>Home</a></li>
//         <li className='nav__item'><a href="" className='nav__link'>Prodcut</a></li>
//         <li className='nav__item'><a href="" className='nav__link'>About</a></li>
//       </ul>
//       <div onClick={navToggler} className={toggleIcon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//       <div>
//       <a href="checkout" className='nav__checkout'>
//               <Badge badgeContent={totalItems} color="secondary">
//                 <ShoppingCart />
//               </Badge>
//         </a> 
//       </div>
//     </nav>
//   )
// }

// export default Navbar
