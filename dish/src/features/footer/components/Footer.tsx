import { getCurrentYear } from '../ui/getCurrentYear';
import { Contact, Container, Item } from '../style/FooterStyles.styles';

const Footer = () => {
  return (
    <Container data-testid="footer-display">
      <Item>&copy;{getCurrentYear()} &#8212; Kordian Korsakowski</Item>
      <Contact>
        <Item>&#9993; &#8212; k.o.korsakowski@gmail.com</Item>
        <Item>&#9742; &#8212; 731708284</Item>
      </Contact>
    </Container>
  );
};

export default Footer;
