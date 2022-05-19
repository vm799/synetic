import React from "react";
import "../Menu/Menu.css";

const Menu = () => {
    return (
     <div className="menu">
        <a href="#About">
          <span  aria-label="about"></span>
          About
        </a>
        <a href="#Mint">
          <span  aria-label="#Mint"></span>
          Mint
          </a>
        <a href="#Staking">
          <span  aria-label="Staking"></span>
          Staking
          </a>
        <a href="#Roadmap">
          <span  aria-label="Roadmap"></span>
          Roadmap
          </a>  
          </div>
    )
  }
  export default Menu;

