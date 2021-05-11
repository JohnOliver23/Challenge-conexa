import styled, { css } from 'styled-components';
import Button from '../Button';
import { shade } from 'polished';

interface ContainerProps {
  hasUser: boolean;
}

export const Container = styled.header<ContainerProps>`
  position: absolute;
  height: 4rem;
  left: 0px;
  right: 0px;
  top: 0px;
  background: var(--color-white);
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  img {
    width: 115px;
    height: 20.84px;
  }
  @media all and (max-width: 769px) {
    ${props =>
      !props.hasUser &&
      css`
        justify-content: center;
      `}
  }
`;
export const BtnLogout = styled(Button)`
  background: var(--color-white);
  border: 2px solid var(--color-blue);
  width: 60px;
  color: var(--color-blue);
  padding: 0px;
  &:hover {
    background: ${shade(0.2, '#fff')};
  }
`;
