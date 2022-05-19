import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

export default function Navbar(){
    // const navToggle = document.querySelector('.nav-toggle');
    // const navLinks = document.querySelectorAll('.nav__link');

// const handleClick = () => {
//    console.log('booya')
//     navToggle.addEventListener('click', () => {
//         document.body.classList.toggle('nav-open');
//     });
    
//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//         })
//     })
// }
const [open, setOpen] = useState(false);


    return (
       
        <header>
            {/* <div className="navbar_fixed"> */}
            <div className="logo">
            <a href="/" > SYNETIC  </a>  
            {/* <ul id="navlist_links">
                    <li className="navlink"><a href="#About" >About</a></li>
                    <li className="navlink"><a href="#Mint"  >Mint</a></li>
                    <li className="navlink"><a href="#Staking">Staking</a></li>
                    <li className="navlink"><a href="#Roadmap">Roadmap</a></li>
                    
            </ul> */}
            </div>
           <Burger open={open} setOpen={setOpen} />
           <Menu open={open} setOpen={setOpen} />
{/*        
            <button onClick={ toggleHamburger } className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button> */}
          
        {/* </div> */}

            <nav className="nav">
            <div className="nav__list">
               <ul> <li className="nav__links"><a href="#About" className="nav__link">About</a></li>
                    <li className="nav__links"><a href="#Mint"  className="nav__link">Mint</a></li>
                    <li className="nav__links"><a href="#Staking" className="nav__link">Staking</a></li>
                    <li className="nav__links"><a href="#Roadmap" className="nav__link">Roadmap</a></li>
       
               </ul>
            </div>

        <div className="social-list">
               
                        <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                         <i className="fab fa-discord"></i>
                         </a>

                         <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                         <i className="fab fa-medium"></i>
                        </a>

                         <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                         <i className="fab fa-twitter"></i>
                        </a>
        </div>

    
            
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