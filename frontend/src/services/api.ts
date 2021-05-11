import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const getConsultations = async () => {
  api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    '@Conexa:token',
  )}`;
  const result = await api
    .get('consultations?_expand=patient')
    .then(res => res.data)
    .catch(err => {
      console.log(err.response);
      return err.response;
    });
  return result;
};

export default api;
