import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  h1 {
    font-family: var(--font-secondary);
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-blue-dark);
  }
`;
export const Content = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  & section {
    width: 100%;
    h3 {
      font-family: var(--font-primary);
      font-weight: bold;
      color: var(--color-gray-dark);
    }
  }
`;

export const ListPatients = styled.div`
  margin-top: 1rem;
  h3 {
    font-family: var(--font-secondary);
    color: var(--color-gray-dark);
    font-weight: 500 !important;
  }
  h4 {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-gray-dark);
  }
  & button {
    width: 90px !important;
    margin-bottom: 1rem;
  }
  .container-list {
    display: flex;
    justify-content: space-between;
  }
`;
export const Footer = styled.footer`
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
