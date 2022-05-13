import React, { useState } from "react";
import "../Navbar/Navbar.css";


export default function Navbar(){

    return (
        <nav>
        <header>
            <div className="logo">
            <a href="/" > SYNETIC  </a>
            </div>
           
            <ul className="nav__list">
                    <li className="nav__item"><a href="#About" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#Mint" className="nav__link">Mint</a></li>
                    <li className="nav__item"><a href="#Staking" className="nav__link">Staking</a></li>
                    <li className="nav__item"><a href="#Roadmap" classNames="nav__link">Roadmap</a></li>
                    
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
                       
            </ul>
          
        </header>
    
        </nav>
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