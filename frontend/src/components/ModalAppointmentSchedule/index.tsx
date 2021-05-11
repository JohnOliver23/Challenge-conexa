import React, { memo, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import { ContainerModal, ModalHeader, ContainerTitle } from './styles';
import Input from '../Input';
import Button from '../Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ForgotPassswordModalProps {
  show: boolean;
  setModalShow(status: boolean): void;
}

const ModalAppointmentSchedule: React.FC<ForgotPassswordModalProps> = ({
  show,
  setModalShow,
}: ForgotPassswordModalProps) => {
  //Yup
  const userSchema = Yup.object({
    username: Yup.string()
      .required('O email é obrigatório')
      .email('Informe um email válido'),
  });
  //Formik
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: userSchema,
    onSubmit: async values => {
      console.log('oi');
    },
  });

  const close = useCallback(() => {
    setModalShow(false);
  }, [setModalShow]);

  return (
    <ContainerModal
      show={show}
      onHide={() => {
        close();
      }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ContainerTitle>
          <Modal.Title id="contained-modal-title-vcenter">
            Agendar consulta
          </Modal.Title>
        </ContainerTitle>
      </ModalHeader>
      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Input
            name="username"
            onChange={formik.handleChange}
            error={
              formik.errors.username && formik.touched.username
                ? formik.errors.username
                : ''
            }
            label="Paciente"
            type="text"
            value={formik.values.username}
            maxLength={100}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Confirmar</Button>
        </Modal.Footer>
      </form>
    </ContainerModal>
  );
};
export default memo(ModalAppointmentSchedule);
