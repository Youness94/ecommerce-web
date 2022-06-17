import React from 'react'
import {Link} from 'react-router-dom'
import Cartbtn from '../Buttons/Cartbtn';
import Login from '../Buttons/Login';
import Signup from '../Buttons/Signup';
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import "./index.css";
import { useCart } from "react-use-cart";

const Header = () => {
  const { totalItems } = useCart();
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid py-2">
    <a className="navbar-brand max-auto fw-bold" href="/">LADIES SHOP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='products'>Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <address className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </address>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="">Action</a></li>
          </ul>
        </li>
       <li className="nav-item">
       <a  href="/checkout">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
      </a>
       </li>
      </ul>
      
      {/* <Login/>
      
      <Signup/>
      <Cartbtn/> */}
    </div>
    
  </div>
 
</nav>
   </>
  )
}

export default Header