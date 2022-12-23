import React from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from "./Hamburger"
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    
    // const navigate = useNavigate()

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
    const setServices = () => {
      setOpen(!open);
      setOpen1(false)
      setOpen2(false)
      setOpen3(false)
    }
    const setLi = () => {
      setOpen1(!open1)
      setOpen(false);
      setOpen2(false)
      setOpen3(false)
    }
    const setLi1 = () => {
      setOpen2(!open2)
      setOpen(false);
      setOpen1(false)
      setOpen3(false)
    }
    const setLi2 = () => {
      setOpen3(!open3)
      setOpen(false);
      setOpen1(false)
      setOpen2(false)
    }
  return (
    <>
    <div className='header'>
    <div className='logo_brand'> 
    <img className='image_logo' src={process.env.PUBLIC_URL + "/Images/logo2022.png"} alt="Parshava" />
    <h1> Parshava Yog and Wellness Studio </h1>
    </div>
   
    
    <nav className='nav_div'>
    <ul className='dropdown'>
        <li className='screen' onClick={setLi}><NavLink to="/" exact={true} 
        className="nav_links" onClick={toggleHamburger}> HOME</NavLink> {open1 ? <>

<div className='icon_bottom'>
<ArrowDropDownIcon />
</div>
</>
 : ""}</li>
        <li className='screen' onClick={setLi1}> <NavLink to="/about"  className={({ isActive }) =>
    isActive ? 'menu-active' : 'nav_links'
  } onClick={toggleHamburger} >ABOUT US</NavLink> {open2 ? <>

<div className='icon_bottom'>
<ArrowDropDownIcon />
</div>
</>
 : ""}</li>
        <li className='screen' onClick={setServices}> <NavLink to="/services"  className={({ isActive }) =>
    isActive ? 'menu-active' : 'nav_links'
  } onClick={toggleHamburger} >OFFERING</NavLink>
{open ? <>

<div className='icon_bottom'>
<ArrowDropDownIcon />
</div>
</>
 : ""}
   </li>
  
        <li className='screen' onClick={setLi2}>   <NavLink to="/contact"  className={({ isActive }) =>
    isActive ? 'menu-active' : 'nav_links'
  } onClick={toggleHamburger} >CONTACT US</NavLink> {open3 ? <>

<div className='icon_bottom'>
<ArrowDropDownIcon />
</div>
</>
 : ""} </li>
  
    </ul>       
                
        </nav>
        <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
      
    </div>
   
    <style jsx>{`    
                .nav_div ul{
                    display:flex;
                    flex-wrap: wrap;
                    float: right;
                    padding: 0px;
                    overflow: hidden;
                }
                 .nav_div ul li{
                    list-style-type: none;
                    padding-right: 10px;
                }
                .hamburger{
                    opacity: 0;
                    z-index: 6;
                    right: 0;
                    margin-right: 4rem;
                } 
                @media (max-width: 847px){
                  
                    .hamburger{
                       opacity: 1;
                        z-index: 6;
                        margin-left: 1rem;
                        position: fixed;
                    }
                
                   
                    .nav_div ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: rgb(167 139 250);
                        height: 100%;
                        width: 100%;
                        margin-top: 2.5rem;
                        position: fixed;
                        left: 0;
                    }
                    h1 {
    text-align: center !important;
  }
  li {
      padding-top: 2rem;
  }
  a.menu-active {
    padding-top: 2rem;
  }
                }                
            `}</style>
    </>
  )
}

export default Header