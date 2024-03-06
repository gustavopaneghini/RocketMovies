import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }
  
  button, input, textarea, legend, label {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }

  body {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    background-color: #1c1b1e;
    width: 100%;
  }
`;
