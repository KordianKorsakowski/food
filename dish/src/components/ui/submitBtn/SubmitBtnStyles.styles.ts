import { Button } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';
import { device } from '../../../theme/breakpoints';

export const SubmitBtnStyle = styled(Button)<{ disabled: boolean }>`
  max-width: max-content;
  display: flex;
  gap: 1rem;
  background-color: ${({ disabled }) =>
    disabled ? `${colors.firstColorBg}` : `${colors.secondColorBg}`}!important;
  @media ${device.mobileL} {
    min-width: 100% !important;
  }
`;
