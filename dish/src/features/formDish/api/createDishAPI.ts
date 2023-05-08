import axios from 'axios';
import { DishDataModal } from '../types/types';
export const createDishAPI = async (
  payload: DishDataModal,
  callback: (str: string) => void
) => {
  await axios
    .post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', {
      ...payload,
    })
    .then((res) => {
      console.log(res.data);
      callback('success');
    })
    .catch((err) => {
      callback('error');
    });
  return 'test';
};
