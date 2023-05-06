import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

test('footerTest', () => {
  render(<Footer />);
  expect(screen.getByTestId('footer-display')).toHaveTextContent(
    'Kordian Korsakowski'
  );
  expect(screen.getByTestId('footer-display')).toHaveTextContent('731708284');
  expect(screen.getByTestId('footer-display')).toHaveTextContent(
    'k.o.korsakowski@gmail.com'
  );
  expect(screen.getByTestId('footer-display')).toHaveTextContent('20');
});
