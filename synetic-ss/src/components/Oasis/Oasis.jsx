import "../Oasis/Oasis.css";
import React, { useState } from "react";



export default function Oasis(){

    return(
<>
        <section class="about-me" id="about">
           <h2 class="section__title section__title--about">Who I am</h2>
           <p class="section__subtitle section__subtitle--about">Designer & developer based out of NYC</p>
           
           <div class="about-me__body">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           
           <img src="https://images.unsplash.com/photo-1484669646614-0c9cd3d4a453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1dHVyaXN0aWMlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" 
            alt="Jane leaning against a bus" class="about-me__img" />
        </section>
</>

    /* <section class="about-oasis" id="about">
    <h2 class="section__title section__title--about">The Oasis</h2>
    <p class="section__subtitle section__subtitle--about">
       Photorealistic, 
        virtual  reality. </p>
    
        {/* <p class=" section__subtitle--about2">
      Live an alternate life without the constraints of modern day reality. </p>
     */
//     <div class="about-oasis__body">
//         <p className="highlight">Built on the blockchain. </p> 
//         <p className="highlight">Build, own and monetise your experiences
// through real-estate ownership.  </p>
// <p>Become an entrepreneur, join the corporate playing field.
// Built on a capitalist model, new 
// jobs and corporations can flourish organically from the foundation of our game.</p>

// <img className="img" src="https://images.unsplash.com/photo-1484669646614-0c9cd3d4a453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1dHVyaXN0aWMlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="sunset over dystopia" class="about-me__img" />

//         <p className="highlight">Spawn into the open world planet and have access to a multiverse of many different planets and worlds where you can 
// fight other players for coins. </p>
// <p className="sub-text">Join virtual metings with co-workers </p> 
// <p className="sub-text"> Walk into a vegas style casino or even fly a fighter-jet. </p>
// <p className="sub-text"> All from the comfort of your own home !</p>
//     </div>
    
//  </section>
     
       
    )}