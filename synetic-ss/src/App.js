import React, { useContext} from "react";
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
import Oasis from "./components/Oasis/Oasis";
import DotRing from "./components/DotRing/DotRing";
import "./App.css";
import { MouseContext } from "./context/mouse-context";
import  Burger  from './components/Burger/Burger';

function App() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  
  return(
    <div className="App">
      
      <DotRing />
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
        
        </div>
      </div>
    <Navbar />
    {/* <Burger /> */}
         <Hero />
         <ImageSlider />
         <ImageSlider2 />
         <Oasis />
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

