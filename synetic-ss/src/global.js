import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=DM+Mono:wght@300&family=Inter:wght@100;200;300&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  cursor: none;
}

:root{
  --ff-primary: 'Audiowide';
  --ff-secondary: 'DM Mono', monospace;
  --ff-tertiary: 'Inter', sans-serif;
  
  --fw-reg: 300;
  --fw-bold: 900;
  
  --clr-light: #fff;
  --clr-dark: #101010;
  --clr-accent: #E900B3;
  --clr-accent_second:#0099CA;
  
  --fs-h1: 2.5rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.25rem;
  --fs-body: 1rem;
  
  --bs: 0.25em 0.25em 1.75em white,
        0.125em 0.125em 1.25em #E900B3;
}


  :root{
    --fs-h1: 4.5rem;
        --fs-h2: 3.75rem;
        --fs-h3: 1.5rem;
        --fs-body: 1.125rem;
       
  }
  /* body {
    background: var(--clr-light);
    color: var(--clr-dark);
    margin: 0;
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
    line-height: 1.6;
} */


section {
    padding: 5em 2em;
}

img {
    display: block;
    max-width: 100%;
}

strong { font-weight: var(--fw-bold) }

/* :focus {
    outline: 3px solid var(--clr-accent);
    outline-offset: 3px;
} */

body {
  margin: 0;
  padding:0;
  font-family:var(--ff-tertiary);
  background-color: var(--clr-dark);
}
  

@keyframes wipe-enter {
	0% {
		transform: scale(0, .025);
	}
	100% {
		transform: scale(1, 1);
	}
}

@media (prefers-reduced-motion: no-preference) {
  .div-animation {
    animation: wipe-enter 5s 1;
  }
}
`

// html, body {
//     margin: 0;
//     padding: 0;
//   }
//   *, *::after, *::before {
//     box-sizing: border-box;
//   }
//   body {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: ${({ theme }) => theme.primaryDark};
//     color: ${({ theme }) => theme.primaryLight};
//     height: 100vh;
//     text-rendering: optimizeLegibility;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//   }
//   h1 {
//     font-size: 2rem;
//     text-align: center;
//     text-transform: uppercase;
//   }
//   img {
//     border-radius: 5px;
//     height: auto;
//     width: 10rem;
//   }
//   div {
//     text-align: center;
//   }
//   small {
//     display: block;
//   }
//   a {
//     color: ${({ theme }) => theme.primaryHover};
//     text-decoration: none;
//   }
//   