import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

interface User {
  name: string;
}
interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Conexa:token');
    const user = localStorage.getItem('@Conexa:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    await api
      .post('/login', {
        email,
        password,
      })
      .then(response => {
        const { token, name } = response.data;
        const user = {
          name,
        };
        localStorage.setItem('@Conexa:token', token);
        localStorage.setItem('@Conexa:user', JSON.stringify(user));
        setData({ token, user });
        finishRequest(true);
      })
      .catch(err => {
        console.log(err.response.data);
        finishRequest(false);
      });
  }, []);

  const finishRequest = (status: boolean) => {
    if (status) {
      toast.success('Usuário logado com sucesso!');
    } else {
      toast.error('Usuário ou senha inválidos');
    }
  };

  const signOut = useCallback(() => {
    localStorage.removeItem('@Conexa:token');
    localStorage.removeItem('@Conexa:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within  an AuthProvider');
  }

  return context;
}
