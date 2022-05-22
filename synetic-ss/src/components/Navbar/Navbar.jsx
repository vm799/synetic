import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { Link, animateScroll} from "react-scroll";



export default function Navbar(){
  
const [open, setOpen] = useState(false);
    return (
        <header>
            <div className="logo"> 
            <Link to="/" smooth={true} duration={3000} onClick ={ () => 
                animateScroll.scrollToTop()}> SYNETIC  </Link>  
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
               <ul> <li className="nav__links nav-item"><Link to="About" smooth={true} duration={3000} className="nav__link">About</Link></li>
                    <li className="nav__links nav-item"><Link to="Mint" smooth={true} duration={3000} className="nav__link">Mint</Link></li>
                    <li className="nav__links nav-item"><Link to="Staking" smooth={true} duration={3000} className="nav__link">Staking</Link></li>
                    <li className="nav__links nav-item"><Link to="Roadmap" smooth={true} duration={3000} className="nav__link">Roadmap</Link></li>
       
               </ul>
            </div>

        <div className="social-list">
               
                        <Link className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-discord"></i>
                         </Link>

                         <Link className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-medium"></i>
                        </Link>

                         <Link className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-twitter"></i>
                        </Link>
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