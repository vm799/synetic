import React, { useState } from "react";
import "../Navbar/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

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
    <FontAwesomeIcon icon="fa-solid fa-compact-disc" flip />
    <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={brands('twitter')} />
</a>

<button onClick={ handleToggle }> {navbarOpen ? <i className="fal fa-bars"></i> : <i className="fal fa-skull-crossbones"></i>}
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