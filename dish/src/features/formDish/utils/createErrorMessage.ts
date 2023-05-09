import { AlertData } from '../types/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface errorMessageData {
  [key: string]: string[];
}

export const createErrorMessage = (errors: errorMessageData): AlertData => {
  let message = 'Error: ';
  for (const property in errors) {
    message = `${message} ${property}: ${errors[property][0]}`;
  }
  return {
    message: message,
    type: 'error',
  };
};
