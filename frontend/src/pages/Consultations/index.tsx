import React, { useEffect, useReducer } from 'react';

import { getConsultations } from '../../services/api';

import { Container, Content, ListPatients } from './styles';

import { genericReducer } from '../../util/reducer';

import { Consultation } from '../../util/types';

import format from 'date-fns/format';

import Button from '../../components/Button';

import { ptBR } from 'date-fns/locale';
import { toast } from 'react-toastify';

const Consultations: React.FC = () => {
  const [consultations, setConsultations] = useReducer(genericReducer, []);

  useEffect(() => {
    getConsultations().then((data: Consultation) => {
      setConsultations({ type: 'UPDATE-ALL', payload: data });
    });
  }, []);

  return (
    <Container>
      <h1>Consultas</h1>
      {consultations.length > 0 ? (
        <Content>
          <section>
            <h3>{consultations.length} consultas agendadas</h3>
            <ListPatients>
              {consultations.map((consultation: Consultation, key: number) => (
                <div key={`container-list${key}`} className="container-list">
                  <div key={key}>
                    <h3>{consultation.patient.first_name}</h3>
                    <h4>
                      {format(
                        new Date(consultation.date),
                        " dd/MM/yy' às ' HH:mm'",
                        {
                          locale: ptBR,
                        },
                      )}
                    </h4>
                  </div>
                  <Button
                    type="button"
                    onClick={() =>
                      toast.success(
                        `Vamos Atender: ${consultation.patient.first_name}`,
                      )
                    }
                    key={`button-list${key}`}
                  >
                    Atender
                  </Button>
                </div>
              ))}
            </ListPatients>
          </section>
        </Content>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Consultations;
