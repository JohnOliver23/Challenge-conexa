import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`

:root {
        --font-primary: 'Nunito', sans-serif;
        --font-secondary: 'Montserrat', sans-serif;
        --color-blue: #2E50D4;
        --color-blue-dark: #1C307F;
        --color-white: #FFFFFB;
        --color-gray-light: #DAD2D0;
        --color-gray-dark: #575453;
        --color-red: #f44336
    }
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
  margin-top: 4rem;
}
body, input, button, p {
  font-family: 'Nunito', serif;
  font-size: 14px;
}
h1, h2, h3, h4, h6, strong {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
}
button {
  cursor: pointer;
}
`;
