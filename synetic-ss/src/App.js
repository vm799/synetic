import React, { useState, useContext, useRef } from "react";
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
import { MouseContext } from "./context/mouse-context";
import FocusLock from 'react-focus-lock';
import { Burger, Menu } from './components';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

function App() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return(
  
    <ThemeProvider theme={ theme }>
       {/* <div className="App"> */}
      <>
      <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          
          <small>Icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
        </div>
        </>
      

 




   
{/*       
      <DotRing />
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
        </div>
      </div>
      <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        

         <Navbar />
         <Hero />
         <ImageSlider />
         <ImageSlider2 />
         <Oasis />
         <Team />
         <TextSlider />
         {/* <Syneverse /> */}
         {/* <NFTgame />
         <About />
         <Roadmap />
         <Contact />
         <Footer /> 
         </div>
    </div>  */}
    </ThemeProvider>
         );
}

export default App;

