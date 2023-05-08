import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const NumberTextFiled = styled(TextField)(() => ({
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}));
