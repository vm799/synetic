import React, { useState } from "react";
import "../Navbar/Navbar.css"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { NavLink } from 'react-router-dom'

export default function Navbar(){

const [navbarOpen, setNavbarOpen] = useState(false)

const handleToggle = ()=> {
setNavbarOpen(prev => !prev)
}



const closeMenu = () => {
    setNavbarOpen(false)
}


    return (
        <nav className= "nav">
            <NavLink to="/"
activeClassName="active-link"
onClick= { () => closeMenu() }
exact
>
</NavLink>

<a href="#" className= "logo" >
    SYNETIC
</a>

<button onClick={ handleToggle }> {navbarOpen? 
(<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )}</button>

{/* <div className="page-links">
    {/* <p>About</p> */}
    {/* <p>About</p>
    <p>Mint</p>
    <p>Staking</p>
    <p>Roadmap</p>
</div> */} 

<ul className={`menuNav ${navbarOpen? "showMenu" : "menu"}` }>

<li className="page-links">  <a href="" alt="">About</a></li>
<li className="page-links">   <a href="" alt="">Mint</a></li>
<li className="page-links">   <a href="" alt="">Staking</a></li>
<li className="page-links">  <a href="" alt="">Roadmap</a></li>

<div className="showNav_social-icons">
                    

                    <li class="social-list__item">
                        <a class="social-list__link" href="https://twitter.com/_sinister_souls">
                        <i class="fab fa-discord"></i>
                        </a></li>

                    <li class="social-list__item">
                        <a class="social-list__link" href="https://twitter.com/_sinister_souls">
                        <i class="fab fa-medium"></i>
                        </a></li>

                    <li class="social-list__item">
                        <a class="social-list__link" href="https://twitter.com/_sinister_souls">
                        <i class="fab fa-twitter"></i>
                        </a></li>
                        </div>
</ul>
</nav>
    )
}