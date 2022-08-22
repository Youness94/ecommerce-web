// import React from 'react'
// import {Link} from 'react-router-dom'
// import Cartbtn from '../Buttons/Cartbtn';
// import Login from '../Buttons/Login';
// import Signup from '../Buttons/Signup';
// import { Badge } from "@material-ui/core";
// import { ShoppingCart } from "@material-ui/icons";
// import "./index.css";
// import { useCart } from "react-use-cart";
// import PersonIcon from '@material-ui/icons/Person';

// const Header = () => {
//   const { totalItems } = useCart();
//   return (
//    <>
// <nav className="navbar navbar-expand navbar-white navbar-light">
// <h3>
//       Shopping
// </h3>
//   <ul className="navbar-nav ml-auto">
//     {/* Navbar Search */}
//     <li className="nav-item">
      
//     </li>
//     {/* Messages Dropdown Menu */}
//     <li className="nav-item dropdown">
//       <a className="nav-link" data-toggle="dropdown" href="#">
//             <PersonIcon/>
//       </a>
//       <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//         <a href="login" className="dropdown-item">
//           {/* Message Start */}
//           <div className="media">
            
//           </div>
//           {/* Message End */}
//         </a>
//         <div className="dropdown-divider" />
//         <a href="register" className="dropdown-item">
//           {/* Message Start */}
//           <div className="media">
            
//           </div>
//           {/* Message End */}
//         </a>
       
//       </div>
//     </li>
//     {/* Notifications Dropdown Menu */}
//     <li className="nav-item dropdown">
//       <a className="nav-link" data-toggle="dropdown" href="#">
//         <i className="far fa-bell" />
//         <span className="badge badge-warning navbar-badge">15</span>
//       </a>
//       <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//         <span className="dropdown-item dropdown-header">15 Notifications</span>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <i className="fas fa-envelope mr-2" /> 4 new messages
//           <span className="float-right text-muted text-sm">3 mins</span>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <i className="fas fa-users mr-2" /> 8 friend requests
//           <span className="float-right text-muted text-sm">12 hours</span>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <i className="fas fa-file mr-2" /> 3 new reports
//           <span className="float-right text-muted text-sm">2 days</span>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
//       </div>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" data-widget="fullscreen" href="#" role="button">
//         <i className="fas fa-expand-arrows-alt" />
//       </a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
//         <i className="fas fa-th-large" />
//       </a>
//     </li>
//   </ul>
//   <div>
//       <a href="checkout" className='nav__checkout'>
//             <Badge badgeContent={totalItems} color="">
//                   <ShoppingCart />
//             </Badge>
//        </a> 
//      </div>
// </nav>

//   </>
//   )
// }

// export default Header