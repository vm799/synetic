import React from "react";
import "../Hero/Hero.css"

export default function Hero(){
    return(
        <div className="hero section-transition">
            <div className="hero-text">
                <h1>SYNETIC</h1>
                <h3>Welcome to the future.</h3>
                
            <button className="hero-btn">CONNECT WALLET</button>
            </div>

            <div className="hero-image">
            <img width="600" height="400" src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8" alt="" />
            </div>
        </div>
      
    )
}