import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  padding: 5px 15px;
  border-radius: 6px;
  border: 0;
  background: blue;
  color: white;
  font-weight: bold;
}

button:hover {
  background: lightblue;
}

button {
  cursor: pointer;
}

`;
