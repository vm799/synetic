import React from "react";
// import {Link} from 'react-scroll'
import "../Navbar/Navbar.css"

export default function Navbar(){

//     const [nav, setNav] = useState(false)
//    function changeBackground(){
//        if(window.scrollY >= 50){
//            setNav(true);
//        } else {
//            setNav(false)
//        }
//    }

//    window.addEventListener("scroll", changeBackground)

    return (
        <nav className= "nav">
<a href="#" className= "logo" >
    SYNETIC
</a>

<ul className="menu">

    {/* <Link to="main" smooth={true}
duration={1000}>MINT</Link></li>
{/* <li> */}
    {/* <Link to="Features"smooth={true}
duration={1000}>SYNEVERSE</Link></li> */} 

<li class="social-list__item">
    JOIN US 
                        <a class="social-list__link" href="https://twitter.com/_sinister_souls">
                            <i class="fab fa-twitter"></i>
                        </a></li>

                        <li class="social-list__item">FOLLOW US 
                        <a class="social-list__link" href="https://twitter.com/_sinister_souls">
                            <i class="fab fa-discord"></i>
                        </a></li>
</ul>

 {/* <a href="https://twitter.com/_sinister_souls" className= "nav-logo"> <img height="20px" with="20px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt = "twitter"> </img></a>
 <a href="https://twitter.com/_sinister_souls" className= "nav-logo"> <img height="20px" with="20px" src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" alt = "twitter"></img></a> */}
 </nav>
    )
}