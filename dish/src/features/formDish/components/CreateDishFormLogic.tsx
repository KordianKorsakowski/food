import { useFormikContext } from 'formik';
import { CreateDishFormBody } from './CreateDishFormBody';
import { DishDataModal } from '../types/types';
import { Button } from '@mui/material';
import { createDishAPI } from '../api/createDishAPI';
export const CreateDishFormLogic = () => {
  const { values, isValid, resetForm, isSubmitting, setSubmitting, setErrors } =
    useFormikContext<DishDataModal>();
  const setMessage = (str: string) => {
    console.log(str);
    setErrors({
      submit: str,
    });
  };
  const submitHandler = async () => {
    console.log(values);
    await createDishAPI(
      {
        ...values,
        preparation_time: values.preparation_time.split(' ').join(':'),
      },
      setMessage
    );
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 2000);
  };
  return (
    <CreateDishFormBody
      submitButton={
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{
            width: 'auto',
          }}
          onClick={submitHandler}
          disabled={!isValid}
        >
          Create
        </Button>
      }
    />
  );
};
