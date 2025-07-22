// // import React, { useState } from 'react'
// // import { Link } from 'react-router-dom';
// // import {FaReact,FaBars} from 'react-icons/fa';
// // import {HiX} from "react-icons/hi";
// // import './style.scss';
// // const data=[
// //   {label:'Home',
// //   to:'/'},
// //   {label:'About',
// //   to:'/About'},
// //   {label:'Resume',
// //   to:'/resume'},
// //   {label:'Skills',
// //   to:'/skills'},
// //   {label:'portfolio',
// //   to:'/portfolio'},
// //   {label:'contact',
// //   to:'/contact'},
// // ]
// // const Navbar= ()=> {
// //   const[toggleIcon,setToggleIcon]=useState(false);
// //   const handleToggleIcon=()=>{
// //     setToggleIcon(!toggleIcon)
// //   }
// //   return (
// //     <div>
// //       <nav className='navbar'>
// //         <div className='navbar-container'>
// //           <Link to={"/"} className='navbar-container-logo'>
// //           <FaReact size={30}></FaReact>
// //           </Link>
// //         </div>
// //         <ul className={`navbar-container-menu ${toggleIcon?"active":""}`}>
// //           {data.map((item,key)=>(
// //           <li key={key}className="navbar-container-menu-item">
// //             <Link className='navbar-container-menu-item-links' to={item.to}> {item.label}</Link></li>))}

// //         </ul>
// // <div className='navIcon' onClick={handleToggleIcon}>{toggleIcon?<HiX size={30}/>:<FaBars size='30'/>}
// // </div>
// //       </nav>
      
// //     </div>
// //   )
// // }

// // export default Navbar;
// import React from 'react';
// import { FaHome, FaUser, FaBriefcase, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
// import './style.scss';

// const navItems = [
//   { id: 'home', icon: <FaHome />, label: 'Home' },
//   { id: 'about', icon: <FaUser />, label: 'About' },
//   { id: 'resume', icon: <FaBriefcase />, label: 'Resume' },
//   { id: 'skills', icon: <FaCode />, label: 'Skills' },
//   { id: 'portfolio', icon: <FaProjectDiagram />, label: 'Portfolio' },
//   { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
// ];

// function Navbar({ active }) {
//   return (
//     <nav className="navbar">
//       <ul>
//         {navItems.map((item) => (
//           <li key={item.id} className={active === item.id ? 'active' : ''}>
//             <a href={`#${item.id}`}>
//               {item.icon}
//               <span>{item.label}</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
// components/Navbar.jsx
import React, { useState } from 'react';
import './style.scss';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Resume', id: 'resume' },
  { label: 'Skills', id: 'skills' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">My Portfolio</div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <span key={link.id} onClick={() => handleClick(link.id)}>
            {link.label}
          </span>
        ))}
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
