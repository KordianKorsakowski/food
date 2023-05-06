import {
  WrapperFooter,
  WrapperHome,
  WrapperMain,
} from '../assets/HomeStyles.styles ';
import { Footer } from '../features/footer';
import { CreateDishForm } from '../features/formDish';

function Home() {
  return (
    <WrapperHome>
      <WrapperMain>
        <CreateDishForm />
      </WrapperMain>
      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </WrapperHome>
  );
}

export default Home;
