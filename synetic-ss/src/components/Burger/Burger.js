import React from 'react';
import "../Burger/Burger.css";
import { bool, func } from 'prop-types';

const Burger = ({open, setOpen}) => {
  return (
   
     <div className='burger' open={open} onClick={() => setOpen(!open)}>
        <div></div> 
        <div></div>
        <div></div>
     </div>

  )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
export default Burger;