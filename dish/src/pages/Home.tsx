import {
  WrapperFooter,
  WrapperHome,
  WrapperMain,
} from '../assets/HomeStyles.styles ';
import { Footer } from '../features/footer';

function Home() {
  return (
    <WrapperHome>
      <WrapperMain>
        <p>czesc</p>
      </WrapperMain>
      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </WrapperHome>
  );
}

export default Home;
