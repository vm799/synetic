import React, { useState } from "react";
import "../Navbar/Navbar.css"


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

<a href="/" className= "logo" >
    SYNETIC
    <i className="fa-solid fa-skull-crossbones"></i>
    <i className="fa-solid fa-bars"></i>
</a>

<button onClick={ handleToggle }> {navbarOpen ? <i class="fa-solid fa-bars"></i>: <i class="fa-solid fa-skull-crossbones"></i>}
</button>

{/* <div className="page-links">
    {/* <p>About</p> */}
    {/* <p>About</p>
    <p>Mint</p>
    <p>Staking</p>
    <p>Roadmap</p>
</div> */} 

<ul className={`menuNav ${navbarOpen? "showMenu" : ""}` }>

<li className="page-links">  <a href="/" alt="">About</a></li>
<li className="page-links">   <a href="/" alt="">Mint</a></li>
<li className="page-links">   <a href="/" alt="">Staking</a></li>
<li className="page-links">  <a href="/" alt="">Roadmap</a></li>

<div className="showNav_social-icons">
                    

                    <li className="social-list__item">
                        <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                        <i className="fab fa-discord"></i>
                        </a></li>

                    <li className="social-list__item">
                        <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                        <i className="fab fa-medium"></i>
                        </a></li>

                    <li className="social-list__item">
                        <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                        <i className="fab fa-twitter"></i>
                        </a></li>
                        </div>
</ul>
</nav>
    )
}