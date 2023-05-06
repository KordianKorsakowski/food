import { WrapperMain } from './css/MainStyles.styles';
import { Props } from './types';

export const Main: React.FC<Props> = ({ children }) => {
  return <WrapperMain>{children}</WrapperMain>;
};
