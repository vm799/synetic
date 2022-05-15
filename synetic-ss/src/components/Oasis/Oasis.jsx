import "../Oasis/Oasis.css";
import React, { useState } from "react";



export default function Oasis(){

    return(
<>
        <section class="about-me" id="about">
           <h2 class="section__title section__title--about">The Oasis</h2>
           <p class="section__subtitle section__subtitle--about">Photorealistic, 
        virtual  reality. </p>
           
        <div class="about-me__body">
            <p className="highlight">Built on the blockchain. </p> 
            <p className="highlight">Build, own and monetise your experiences
            through real-estate ownership.  </p>
            <p>Become an entrepreneur, join the corporate playing field.
            Built on a capitalist model, new 
            jobs and corporations can flourish organically from the foundation of our game.</p>
        </div>
           
           <img src="https://images.unsplash.com/photo-1520724807848-3ff34d6a3bba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
            alt="architecture in the game" class="about-me__img" />

<p className="highlight strong">Spawn into the open world planet and have access to a multiverse of many different planets and worlds where you can 
 fight other players for coins. </p>
<p className=" sub-text ">Join virtual meetings with co-workers </p> 
<p className=" sub-text"> Walk into a vegas style casino or even fly a fighter-jet. </p>
<p className="sub-text"> All from the comfort of your own home !</p>

</section>
</>
     
       
    )}