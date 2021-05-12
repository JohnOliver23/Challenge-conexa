import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 86px;
  background-color: var(--color-white);
  padding: 32px;
  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0px;
    width: 100%;
    border-top: 1px solid var(--color-gray-light);
  }

  button {
    width: 80px;
  }

  button:nth-child(2) {
    width: 140px;
    height: 40px;
    font-weight: 600;
    padding: 0.4rem 0.6rem;
  }
`;
