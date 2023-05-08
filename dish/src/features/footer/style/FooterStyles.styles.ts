import styled from 'styled-components';
import { device } from '../../../theme/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  width: 100%;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
export const Item = styled.p`
  letter-spacing: 2px;
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
  @media ${device.mobileL} {
    text-align: center;
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
