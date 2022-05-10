import React from "react";
import TeamBox from "../TeamBox/TeamBox"
import "../Team/Team.css"

export default function Team(){
    return(
        <div id="team">
            <div className="text-body">
            <h1>Meet The Team</h1>
            {/* <h2>Created by 2 friends with common vision of disrupting reality.</h2>
              */}

                <div className="straplines">
                <p> Join Us. </p>
                <p> Let's disrupt together.</p> 
                </div>
            </div>
            <div className="team-container">
                <TeamBox title="Creator Lex0" text="Into retro gaming,sushi and racing dolphins"/>
                <TeamBox title="Creator Ruyu" text="American Muscle car mad and the Art of War"/>
                <TeamBox title="Builder Panthera" text="Fav character: Yoshimitsu, deconstructed apple pies" />
        

                </div>
        </div>
    )
}