import React, { useState } from "react";

import "../Navbar/Navbar.css"

export default function Navbar(){

const [navbarOpen, setNavbarOpen] = useState(false)

const handleToggle = ()=> {
setNavbarOpen(prev => !prev)
}

    return (
        <nav className= "nav">
<a href="#" className= "logo" >
    SYNETIC
</a>

<button onClick={ handleToggle }> {navbarOpen? "Close" : "Open"}</button>
<div className="page-links">
    {/* <p>About</p> */}
    <p>About</p>
    <p>Mint</p>
    <p>Staking</p>
    <p>Roadmap</p>
</div>

<ul className={`menuNav ${navbarOpen? "showMenu" : ""}` }>

<li class="social-list__item">
                        <a class="social-list__link" href="https://twitter.com/_sinister_souls">
                        <i class="fab fa-twitter"></i>
                        </a></li>

                        <li class="social-list__item">
                        <a class="social-list__link" href="https://twitter.com/_sinister_souls">
                        <i class="fab fa-discord"></i>
                        </a></li>

                        <li class="social-list__item">
                        <a class="social-list__link" href="https://twitter.com/_sinister_souls">
                        <i class="fab fa-medium"></i>
                        </a></li>
</ul>

 {/* <a href="https://twitter.com/_sinister_souls" className= "nav-logo"> <img height="20px" with="20px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt = "twitter"> </img></a>
 <a href="https://twitter.com/_sinister_souls" className= "nav-logo"> <img height="20px" with="20px" src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" alt = "twitter"></img></a> */}
 </nav>
    )
}