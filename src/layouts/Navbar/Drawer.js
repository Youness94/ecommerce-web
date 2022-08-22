import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import { useCart } from "react-use-cart";
import MenuIcon from "@mui/icons-material/Menu";
import  './navbar.css'

const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { totalItems } = useCart();

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {/* {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))} */}
      
          <Link to="/" className="muiDrawerLink" >
                  {/* <Tab label="Home" /> */}
                  Home
                </Link>
                <Link to="/products" className="muiDrawerLink" >
                  {/* <Tab label="Products" /> */}
                  Products
                </Link>
                <Link to="/about" className="muiDrawerLink" >
                  {/* <Tab label="About Us" /> */}
                  About Us
                </Link>
                <Link to="/contact" className="muiDrawerLink" >
                  {/* <Tab label="Contact" /> */}
                  Contact
                </Link>
                <Link className="muiDrawerLink" sx={{ marginLeft: "10px" }} variant="contained">
                Login
                </Link>
                <Link className="muiDrawerLink" sx={{ marginLeft: "10px" }} variant="contained">
                  SignUp
                </Link>

                 

                {/* <div className="iconLink"> */}
                {/* <Link to="/login" className="muiLinkIcon" >
                  <PersonIcon/>
                </Link>  */}
                  {/* <Link to="/checkout" className="muiLinkIcon">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCartIcon/>
                  </Badge>
                </Link>  */}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;