import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}

html, body, #root {
  min-height: 100vh;
  background-size: 800px;
}

body {
  -webkit-font-smoothing: antialiased !important;

}

#root {
  display: flex;
}

button {
    border: 0;
    outline: none;
    cursor: pointer;
    background-color: transparent;
}

ul {
    list-style-type: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  outline: none;
}

input, textarea {
  border: none;
  background-color: transparent;
}

`;
