import { useFormikContext } from 'formik';
import { CreateDishFormBody } from './CreateDishFormBody';
import { DishDataModal } from '../types/types';
import { Button } from '@mui/material';
import { createDishAPI } from '../api/createDishAPI';
import { setPayload } from '../ui/setPayload';
import { useState } from 'react';
import { Loader } from '../../../components/loder/Loder';
export const CreateDishFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { values, isValid, resetForm, isSubmitting, setSubmitting, setErrors } =
    useFormikContext<DishDataModal>();
  const setMessage = (str: string) => {
    console.log(str);
    setErrors({
      submit: str,
    });
  };
  const submitHandler = async () => {
    const data: DishDataModal | undefined = setPayload(values);
    if (data) {
      setIsLoading(true);
      await createDishAPI(
        {
          ...data,
        },
        setMessage
      ).finally(() => {
        setIsLoading(false);
      });
    }
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
            display: 'flex',
            gap: '1rem',
          }}
          onClick={submitHandler}
          disabled={!isValid}
        >
          {isLoading && <Loader size="2rem" />}
          Create
        </Button>
      }
    />
  );
};
