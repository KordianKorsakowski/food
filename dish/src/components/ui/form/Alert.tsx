import { Alert } from '@mui/material';
import { AlertData } from '../../../features/formDish/types/types';

export const AlertForm: React.FC<AlertData> = ({ message, type }) => {
  return <Alert severity={type}>{message}</Alert>;
};
