import { useFormikContext } from 'formik';
import { CreateDishFormBody } from './CreateDishFormBody';
import { DishDataModal } from '../types/types';
import { Button } from '@mui/material';
export const CreateDishFormLogic = () => {
  const {
    values,
    isValid,
    resetForm,
    isSubmitting,
    setSubmitting,
    setErrors,
    setTouched,
    setFieldError,
  } = useFormikContext<DishDataModal>();

  const submitHandler = async () => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 0);
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
