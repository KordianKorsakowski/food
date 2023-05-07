import axios from 'axios';
import { DishDataModal } from '../types/types';
export const createDishAPI = async (
  data: DishDataModal,
  callback: (str: string) => void
) => {
  await axios
    .post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', {
      ...data,
    })
    .then((res) => {
      console.log(res.data);
      callback('test');
      if (res.status === 200) {
        // return 'success';
      }
      if (res.status === 400) {
        // return 'error';
      }
      // return 'cos';
    })
    .catch((err) => {
      callback('test');
    });
  return 'test';
};
