import axios from 'axios';
import { AlertData, DishDataModal } from '../types/types';
import { createErrorMessage } from '../utils/createErrorMessage';
import { createSuccessMessage } from '../utils/createSuccessMessage';
export const createDishAPI = async (
  payload: DishDataModal,
  callback: (data: AlertData) => void
) => {
  await axios
    .post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', {
      ...payload,
    })
    .then((res) => {
      if (res.status === 200) {
        const response: DishDataModal = res.data;
        const data = createSuccessMessage(response);
        callback(data);
      } else {
        callback({ message: 'Something went wrong...', type: 'info' });
      }
    })
    .catch((err) => {
      const errors = err.response.data;
      const data = createErrorMessage(errors);
      callback(data);
    });
};
