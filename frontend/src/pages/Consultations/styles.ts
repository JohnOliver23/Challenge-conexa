import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  height: calc(100vh - 8rem);
  overflow-y: auto;
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
