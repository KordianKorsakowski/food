import { Alert, TextField, Grid } from '@mui/material';
import { DishDataModal } from '../types/types';
import { useFormikContext } from 'formik';
import React from 'react';

interface FormDishBodyProps {
  submitButton: JSX.Element;
}

export const CreateDishFormBody: React.FC<FormDishBodyProps> = ({
  submitButton,
}) => {
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormikContext<DishDataModal>();

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Alert severity="error">Alert</Alert>
      <h4>Formualrz</h4>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label={'Name'}
            value={values.name}
            fullWidth
            helperText={touched.name && errors.name}
            error={Boolean(touched.name && errors.name)}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="preparation_time"
            label={'Preparation time'}
            value={values.preparation_time}
            fullWidth
            helperText={touched.preparation_time && errors.preparation_time}
            error={Boolean(touched.preparation_time && errors.preparation_time)}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="type"
            label={'Type'}
            value={values.type}
            fullWidth
            helperText={touched.type && errors.type}
            error={Boolean(touched.type && errors.type)}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '2rem 0 0 0',
        }}
      >
        {submitButton}
      </div>
    </form>
  );
};
