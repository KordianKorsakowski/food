import { DishDataModal } from '../types/types';
import { CreateDishFormLogic } from './CreateDishFormLogic';
import { CreateDishFormConfig } from './CreateDishFormConfig';

const CreateDishForm = () => {
  const initialValues: DishDataModal = {
    name: '',
    preparation_time: '',
    type: '',
  };
  return (
    <>
      <CreateDishFormConfig initialValues={initialValues}>
        <CreateDishFormLogic />
      </CreateDishFormConfig>
    </>
  );
};

export default CreateDishForm;
