import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
interface LabelProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-white);
  border-bottom: 2px solid var(--color-gray-light);
  padding-bottom: 8px;
  padding-right: 8px;
  width: 100%;
  color: #999392;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: var(--color-red);
    `}
  ${props =>
    props.isFocused &&
    css`
      color: var(--color-blue-dark);
      border-color: var(--color-blue-dark);
    `}
  ${props =>
    props.isFilled &&
    css`
      color: var(--color-blue-dark);
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #333;
    &::placeholder {
      font-style: italic;
      color: #666360;
      ${props =>
        props.isErrored &&
        css`
          color: var(--color-red);
        `}
    }
  }
  .container-input {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
`;

export const Label = styled.p<LabelProps>`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-gray-dark);
  margin-bottom: 2px;
  ${props =>
    props.isErrored &&
    css`
      color: var(--color-red);
    `}
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 1rem;
  svg {
    margin: 0;
  }
  span {
    background: var(--color-red);
    color: var(--color-white);
    &::before {
      border-color: var(--color-red) transparent;
    }
  }
`;
