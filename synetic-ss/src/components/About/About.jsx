import React from "react";
import "../About/About.css";

export default function About(){
    return(
        <div className="about">
     
        <div className="about-image">
        <h1>ABOUT</h1>
        <img width="600" height="400" src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />
        </div>

        <div className="about-text">
            
            <p className="highlight-text"> A new open world multi-planetary system created with endless possibilities for escape, on the blockchain. </p>
            <p>Live a second digital reality where nothing is off limits. </p>
            <p> Use your Sinister Soul NFTs as playable characters</p>
            <p>EXPLORE. BUILD. OWN. EVOLVE.</p>
       
        <button className="about-btn">CONNECT WALLET</button>
        </div>

        
        
    </div>

    )
}