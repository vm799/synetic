import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 50vh;
  text-align:center;
  padding: 2rem;
  position: absolute;
  top: 0;
  transition: transform 0.3s ease-in-out;
 
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 600px {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: var(--clr-accent);
    }
  }
`;