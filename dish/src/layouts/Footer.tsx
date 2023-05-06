import { WrapperFooter } from './css/FooterStyles.styles';
import { Props } from './types';

export const Footer: React.FC<Props> = ({ children }) => {
  return <WrapperFooter>{children}</WrapperFooter>;
};
