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
  background: #fff;
  border-bottom: 2px solid #dad2d0;
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
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #8296e5;
      border-color: #8296e5;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #8296e5;
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
          color: #c53030;
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
  color: #575453;
  margin-bottom: 2px;
  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
    `}
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 1rem;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
