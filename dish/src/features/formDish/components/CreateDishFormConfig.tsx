import { Formik } from 'formik';
import * as Yup from 'yup';
import { PropsWithChildren } from 'react';

import { DishDataModal } from '../types/types';

type FormDishConfigProps = PropsWithChildren<{
  initialValues: DishDataModal;
}>;

export const CreateDishFormConfig = (props: FormDishConfigProps) => {
  const { children, initialValues } = props;
  const validation = Yup.object().shape({
    name: Yup.string().max(255).trim().required('Name is requierd'),
    preparation_time: Yup.string().required(
      'Preparation time is requierd max value is (23:59:59)'
    ),
    type: Yup.string().trim().required('Type is requierd'),
    diameter: Yup.number().when('type', {
      is: 'pizza',
      then: Yup.number().required('Diameter of pizza is requierd'),
    }),
    no_of_slices: Yup.number().when('type', {
      is: 'pizza',
      then: Yup.number().required('Number of slieces is requierd'),
    }),
    slices_of_bread: Yup.number().when('type', {
      is: 'sandwich',
      then: Yup.number().required('Slieces of bread is requierd'),
    }),
    spiciness_scale: Yup.number().when('type', {
      is: 'soup',
      then: Yup.number().required('Spiciness of soup is requierd'),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validateOnMount
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
      }}
    >
      {children}
    </Formik>
  );
};
