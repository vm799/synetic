import styled from 'styled-components';

export const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
background: var(--clr-dark);
height: 50vh;
text-align: center;
padding: 1.5rem;
position: absolute;
top: 1rem;
transition: transform 0.3s ease-in-out;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
cursor:pointer;

@media (max-width: ${({ theme }) => theme.mobile}) {
  width: 100%;
}

a {
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  background-color: rgba(0,153,202,1);
    background-image: radial-gradient(circle, rgba(233,0,179,1) 0%, rgba(0,153,202,1) 50%);
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
`;