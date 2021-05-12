import React, { useEffect } from 'react';

import { getConsultations } from '../../services/api';

import { Container, Content, ListPatients } from './styles';

import { Consultation } from '../../util/types';

import format from 'date-fns/format';

import Button from '../../components/Button';

import { ptBR } from 'date-fns/locale';

import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/auth';

import Footer from '../../components/Footer';

const Consultations: React.FC = () => {
  const { consultations, setConsultations } = useAuth();

  useEffect(() => {
    getConsultations()
      .then((data: Consultation) => {
        setConsultations({ type: 'UPDATE-ALL', payload: data });
      })
      .catch(err => {
        console.log(err);
        toast.error('Erro ao carregar dados, Por favor, recarregue a página');
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <h1>Consultas</h1>
        {consultations && consultations.length > 0 ? (
          <Content>
            <section>
              <h3>{consultations.length} consultas agendadas</h3>
              <ListPatients>
                {consultations.map(
                  (consultation: Consultation, key: number) => (
                    <div
                      key={`container-list${key}`}
                      className="container-list"
                    >
                      <div key={key}>
                        <h3>{consultation.patient.first_name}</h3>
                        <h4>
                          {format(
                            new Date(consultation.date),
                            " dd/MM/yyyy' às ' HH:mm'",
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
                  ),
                )}
              </ListPatients>
            </section>
          </Content>
        ) : (
          ''
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Consultations;
