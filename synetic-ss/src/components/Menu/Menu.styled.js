import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


export const StyledMenu = styled.nav`
top:10%;
display: flex;
flex-direction: column;
justify-content: center;
background: rgb(0,0,0);
background: rgb(84,2,68);
background: rgb(84,2,68);
background: linear-gradient(0deg, rgba(51,5,41,1) 0%, rgba(22,21,21,0.45) 64%);text-align: center;
padding: 1.5rem;
position: absolute;
transition: transform 0.7s ease-in-out;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
cursor:pointer;
width:100%;



a {
  font-size: 2rem;
  text-transform: uppercase;
padding: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  background-color: rgba(0,153,202,1);
    background-image: radial-gradient(circle, rgba(233,0,179,1) 0%, rgba(0,153,202,1) 30%);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  text-decoration: none;
  transition: color 0.3s linear;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: white;
  }
}

 .fab{
  border: 1px solid white;
  padding: 0.5em;
  display:flex;
  align-items:center;
  justify-content:center;
}
`;