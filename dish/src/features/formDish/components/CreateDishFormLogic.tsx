import { useFormikContext } from 'formik';
import { CreateDishFormBody } from './CreateDishFormBody';
import { DishDataModal } from '../types/types';
import { Button } from '@mui/material';
import { createDishAPI } from '../api/createDishAPI';
import { setPayload } from '../utils/setPayload';
import { useState } from 'react';
import { Loader } from '../../../components/ui/loder/Loder';
import { SubmitBtn } from '../../../components/ui/submitBtn/SubmitBtn';
export const CreateDishFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { values, isValid, resetForm, setSubmitting, setErrors, dirty } =
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
        <SubmitBtn
          disabled={!(isValid && dirty)}
          submitFn={submitHandler}
          isLoading={isLoading}
          text={'Create'}
        />
      }
    />
  );
};
