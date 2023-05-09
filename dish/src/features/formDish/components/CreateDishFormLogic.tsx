import { useFormikContext } from 'formik';
import { CreateDishFormBody } from './CreateDishFormBody';
import { AlertData, DishDataModal } from '../types/types';
import { createDishAPI } from '../api/createDishAPI';
import { setPayload } from '../utils/setPayload';
import { useState } from 'react';
import { SubmitBtn } from '../../../components/ui/form/submitBtn/SubmitBtn';
import { AlertForm } from '../../../components/ui/form/AlertForm';
export const CreateDishFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAlertMessage, setIsAlertMessage] = useState<AlertData | null>(null);
  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<DishDataModal>();

  const submitHandler = async () => {
    const data: DishDataModal | undefined = setPayload(values);
    if (data) {
      setIsLoading(true);
      await createDishAPI(
        {
          ...data,
        },
        setIsAlertMessage
      ).finally(() => {
        setIsLoading(false);
        setSubmitting(false);
        resetForm();
      });
    }
    setTimeout(() => {
      setIsAlertMessage(() => null);
    }, 3000);
  };

  return (
    <>
      {isAlertMessage && (
        <AlertForm
          type={isAlertMessage.type}
          message={isAlertMessage.message}
        />
      )}
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
    </>
  );
};
