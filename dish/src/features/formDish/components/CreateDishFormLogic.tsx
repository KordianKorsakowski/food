import { useFormikContext } from 'formik';
import { CreateDishFormBody } from './CreateDishFormBody';
import { DishDataModal } from '../types/types';
import { Button } from '@mui/material';
import { createDishAPI } from '../api/createDishAPI';
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
  const setMessage = (str: string) => {
    console.log(str);
    setErrors({
      submit: str,
    });
  };
  const submitHandler = async () => {
    console.log(values);
    const res = await createDishAPI(values, setMessage);
    console.log(res);
    setTimeout(() => {
      setSubmitting(false);
      // resetForm();
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
