import styled, { keyframes } from 'styled-components';
import LoginDraw from '../../assets/img/LoginDraw.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 39px;
    text-align: center;
    letter-spacing: -1.5px;
    color: #210080;
  }
`;
const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  width: 100%;
  form {
    margin: 80px 0;
    width: 70%;
    max-width: 700px;
    text-align: center;
    h1 {
      display: none;
      font-size: 2rem !important;
    }
    & div {
      margin-top: 2rem !important;
    }
  }
  & button {
    margin-top: 2rem;
  }
  @media all and (max-width: 769px) {
    form {
      h1 {
        display: block;
      }
    }
  }
`;
export const Content = styled.div`
  place-content: center;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${LoginDraw}) no-repeat center;
`;
