import React from 'react';
import Button from '../../components/Button';
import { Container, Content, Background, AnimationContainer } from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
const SignIn: React.FC = () => {
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
              type="password"
              placeholder="Digite sua senha"
              onChange={formik.handleChange}
              error={
                formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : ''
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
