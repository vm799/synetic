import React, { useState } from "react";
import "../Navbar/Navbar.css";


export default function Navbar(){
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');

const menuToggle = () =>{
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        })
    })
}

    return (
       
        <header>
            <div className="logo">
            <a href="/" > SYNETIC  </a>
            </div>
            <button onClick={menuToggle} class="nav-toggle" aria-label="toggle navigation">
                <span class="hamburger"></span>
            </button>

        <nav class="nav">
        
            <ul className="nav__list">
        
        <div className="nav-list">
                    <li className="nav__link"><a href="#About" >About</a></li>
                    <li className="nav__link"><a href="#Mint"  >Mint</a></li>
                    <li className="nav__link"><a href="#Staking">Staking</a></li>
                    <li className="nav__link"><a href="#Roadmap">Roadmap</a></li>
        </div>
        
        <div className="social-list">
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