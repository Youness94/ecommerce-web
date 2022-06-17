import React, {useState} from 'react'
import  './navbar.css'
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Navbar = () => {

  const { totalItems } = useCart();
  const [active, setActive] = useState('nav__menu');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');


  const navToggler = () => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')
    
    // toggler icon 

    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
  }
  return (
    <nav className="nav__bar">
      <a href="" className='nav__logo'>LOGO</a>
      <ul className={active}>
        <li className='nav__item'><a href="" className='nav__link'>Home</a></li>
        <li className='nav__item'><a href="" className='nav__link'>Prodcut</a></li>
        <li className='nav__item'><a href="" className='nav__link'>About</a></li>
      </ul>
      <div onClick={navToggler} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div>
      <a href="checkout" className='nav__checkout'>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
        </a> 
      </div>
    </nav>
  )
}

export default Navbar
