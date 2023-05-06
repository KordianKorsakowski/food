import styled from 'styled-components';
import { colors } from '../theme/colors';

export const WrapperHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const WrapperMain = styled.div`
  width: 100%;
  height: 90vh;
  background-color: blue;
  background-color: ${colors.firstColorBg};
  color: ${colors.firstColorFont};
`;

export const WrapperFooter = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${colors.secondColorBg};
  color: ${colors.secondColorFont};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
