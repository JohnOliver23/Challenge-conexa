import React, { memo, useCallback, useEffect, useState } from 'react';

import { Modal } from 'react-bootstrap';

import { ContainerModal, ModalHeader, ContainerTitle } from './styles';

import Button from '../Button';

import { useFormik } from 'formik';

import * as Yup from 'yup';

import { Row, Col } from 'react-bootstrap';

import format from 'date-fns/format';

import { getPatients } from '../../services/api';

import { toast } from 'react-toastify';

import Select from '../../components/Select';

import { useAuth } from '../../hooks/auth';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

import { Patient, Consultation } from '../../util/types';

import { postConsultation } from '../../services/api';
interface ForgotPassswordModalProps {
  show: boolean;
  setModalShow(status: boolean): void;
}

const ModalAppointmentSchedule: React.FC<ForgotPassswordModalProps> = ({
  show,
  setModalShow,
}: ForgotPassswordModalProps) => {
  const { setConsultations } = useAuth();
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    getPatients()
      .then((data: Patient[]) => {
        setPatients(data);
      })
      .catch(err => {
        console.log(err);
        toast.error('Erro ao carregar dados, Por favor, recarregue a página');
      });
  }, []);

  //filling select with patients options
  const mapAllOptions = useCallback(
    () =>
      patients &&
      patients.map(patient => (
        <option key={patient.id} value={patient.id}>
          {patient.first_name}
        </option>
      )),
    [patients],
  );

  //Yup
  const userSchema = Yup.object({
    date: Yup.date().required('Data inválida'),
    hour: Yup.date().required('A hora é obrigatória'),
    patient: Yup.string().required('O paciente é obrigatório'),
  });

  //Formik
  const formik = useFormik({
    initialValues: {
      date: new Date(),
      hour: new Date(),
      patient: '',
    },
    validationSchema: userSchema,
    onSubmit: async values => {
      const date = format(new Date(values.date), 'MM-dd-yyyy');
      const hour = format(new Date(values.hour), 'HH:mm');
      const data = {
        patientId: parseInt(values.patient),
        date: new Date(date + ' ' + hour),
      };
      postConsultation(data)
        .then((resp: Consultation) => {
          const patient = patients.filter(p => p.id === resp.patientId)[0];
          resp.patient = patient;
          setConsultations({ type: 'ADD', payload: resp });
          toast.success('Consulta agendada com sucesso');
          close();
        })
        .catch(err => {
          console.log(err);
          toast.error('Erro ao agendar consulta');
          close();
        });
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
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Row>
              <Col md="6">
                <KeyboardDatePicker
                  invalidDateMessage="Data inválida"
                  name="date"
                  margin="normal"
                  id="date-picker-dialog"
                  label="Data"
                  format="MM/dd/yyyy"
                  value={formik.values.date}
                  onChange={e => formik.setFieldValue('date', e)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Col>
              <Col md="6">
                <KeyboardTimePicker
                  invalidDateMessage="Hora inválida"
                  name="hour"
                  margin="normal"
                  id="time-picker"
                  label="Hora"
                  value={formik.values.hour}
                  onChange={e => formik.setFieldValue('hour', e)}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Select
                  label="Paciente"
                  name="patient"
                  value={formik.values.patient}
                  onChange={formik.handleChange}
                  list={mapAllOptions()}
                  error={
                    formik.errors.patient && formik.touched.patient
                      ? formik.errors.patient
                      : ''
                  }
                />
              </Col>
            </Row>
          </MuiPickersUtilsProvider>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Confirmar</Button>
        </Modal.Footer>
      </form>
    </ContainerModal>
  );
};
export default memo(ModalAppointmentSchedule);
