import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
  outline: 0;
}
body {
  background: #fff;
  color: #333;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: 'Nunito', serif;
  font-size: 14px;
}
h1, h2, h3, h4, h6, strong {
  font-family: Montserrat;
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;