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
        <div>
        <header>
            <div className="logo">
            <a href="/" >
                    SYNETIC 
            </a>
        </div>
        {/* className="nav-toggle" aria-label="toggle navigation" */}
            <button >
                <span className="hamburger"></span>
            </button>
            <nav>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#About" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#Mint" className="nav__link">Mint</a></li>
                    <li className="nav__item"><a href="#Staking" className="nav__link">Staking</a></li>
                    <li className="nav__item"><a href="#Roadmap" classNames="nav__link">Roadmap</a></li>

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
        </header>
    
        </div>
    )}



//                   <div className="showNav_social-icons">
//                     <li className="social-list__item">
//                         <a className="social-list__link" href="https://twitter.com/_sinister_souls">
//                         <i className="fab fa-discord"></i>
//                         </a></li>

//                     <li className="social-list__item">
//                         <a className="social-list__link" href="https://twitter.com/_sinister_souls">
//                         <i className="fab fa-medium"></i>
//                         </a></li>

//                     <li className="social-list__item">
//                         <a className="social-list__link" href="https://twitter.com/_sinister_souls">
//                         <i className="fab fa-twitter"></i>
//                         </a></li>
//                         </div>
// </ul>
// </nav>
//     
//