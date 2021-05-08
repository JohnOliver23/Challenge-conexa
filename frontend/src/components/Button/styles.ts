import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #2e50d4;
  font-size: 16px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 700;
  margin-top: 1rem;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#2e50d4')};
  }
`;
