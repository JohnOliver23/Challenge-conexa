import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const ContainerModal = styled(Modal)`
  .modal-dialog {
    max-width: 629px;
  }
  .modal-header {
    border-bottom: none;
  }
  .modal-header .close {
    margin-top: -1.5rem;
    outline: none;
  }
  .modal-content {
    border-radius: 20px !important;
  }
  .modal-body {
    padding: 0 33px;
  }
  .modal-footer {
    border-top: none;
    padding: 0 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    & button {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
  .col-md-6 {
    height: 100px;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid var(--color-blue-dark);
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid var(--color-blue-dark);
  }
  .MuiFormLabel-root.Mui-focused {
    color: var(--color-blue-dark);
  }
`;
export const ModalHeader = styled(Modal.Header)`
  & button:focus {
    outline: none;
  }
`;
export const ContainerTitle = styled.div`
  padding: 0 16px;
  .modal-title {
    letter-spacing: 0.3px;
    font-family: Nunito;
    color: var(--color-blue-dark);
    font-weight: 500;
  }
`;

export const ContainerFooter = styled.p``;
