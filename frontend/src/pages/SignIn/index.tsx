import React, { useState } from 'react';
import Button from '../../components/Button';
import { Container, Content, Background, AnimationContainer } from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { FiHelpCircle } from 'react-icons/fi';

const SignIn: React.FC = () => {
  const [passwordShow, setPasswordShow] = useState(false);

  const { signIn } = useAuth();
  //Yup
  const userSchema = Yup.object({
    email: Yup.string()
      .required('O email é obrigatório')
      .email('Informe um email válido'),
    password: Yup.string().required('A senha é obrigatória'),
  });
  //Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userSchema,
    onSubmit: async values => {
      await signIn({
        email: values.email,
        password: values.password,
      });
    },
  });
  return (
    <Container>
      <Background>
        <div />
      </Background>
      <Content>
        <AnimationContainer>
          <form onSubmit={formik.handleSubmit}>
            <h1>Faça Login</h1>

            <Input
              label="Email"
              name="email"
              placeholder="Digite seu Email"
              onChange={formik.handleChange}
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ''
              }
              value={formik.values.email}
            />

            <Input
              label="Senha"
              name="password"
              type={passwordShow ? 'text' : 'password'}
              placeholder="Digite sua senha"
              onChange={formik.handleChange}
              error={
                formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : ''
              }
              iconLabel={<FiHelpCircle size="15" color="#999392" />}
              icon={
                passwordShow ? (
                  <GoEye
                    onClick={e => setPasswordShow(!passwordShow)}
                    size={20}
                  />
                ) : (
                  <GoEyeClosed
                    size={20}
                    onClick={e => setPasswordShow(!passwordShow)}
                  />
                )
              }
              value={formik.values.password}
            />

            <Button type="submit">Entrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
