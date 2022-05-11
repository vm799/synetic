import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Team from "./components/Team/Team"
// import Syneverse from "./components/Syneverse/Syneverse"
import About from "./components/About/About"
import NFTgame from "./components/NFTgame/NFTgame";
import Hero from "./components/Hero/Hero";
import Roadmap from "./components/Roadmap/Roadmap";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import TextSlider from "./components/TextSlider/TextSlider";
import ImageSlider2 from "./components/ImageSlider2/ImageSlider2";

function App() {
  return(
    <div className="App">
          
       <Navbar />
         <Hero />
         <ImageSlider />
         <ImageSlider2 />
         <Team />
         <TextSlider />
         {/* <Syneverse /> */}
         <NFTgame />
         <About />
         <Roadmap />
         <Contact />
         <Footer /> 
    
    </div>
        )
}

export default App;

