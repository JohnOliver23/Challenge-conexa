import React, { useState } from 'react';

import Button from '../../components/Button';

import { BtnLogout } from '../../components/Header/styles';

import { Container } from './styles';

import ModalAppointmentSchedule from '../../components/ModalAppointmentSchedule';

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      {showModal && (
        <ModalAppointmentSchedule
          show={showModal}
          setModalShow={setShowModal}
        />
      )}
      <Container>
        <div>
          <BtnLogout>Ajuda</BtnLogout>
          <Button onClick={() => setShowModal(true)}>Agendar consulta</Button>
        </div>
      </Container>
    </>
  );
};

export default Footer;
