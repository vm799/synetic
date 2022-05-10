import React from "react";
import "../Contact/Contact.css"

export default function Contact (){
    return(
        <div id="contact">
            <h1>CONTACT US</h1>
            <form>
                <input type="text"
                placeholder="Full Name" required/>
                <input type="email"placeholder="Your Email here please" required/>
                <textarea placeholder="Details here" name="message"></textarea>
                <input type="submit" value="send"/>
            </form>
        </div>
    )
}