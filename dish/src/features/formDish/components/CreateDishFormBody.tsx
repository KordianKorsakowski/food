import { Alert, TextField, Grid, MenuItem } from '@mui/material';
import { DishDataModal } from '../types/types';
import { useFormikContext } from 'formik';
import React from 'react';
import { CreateDishFormConditionallyInputs } from './CreateDishFormConditionallyInputs';
import { DISH_OPTIONS } from '../constants/constants';
import { Container } from '../style/CreateDishFormStyle.styles';

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
      <Container>
        <h4>Create Your Dish</h4>
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
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="preparation_time"
              label={'Preparation time'}
              value={values.preparation_time}
              fullWidth
              helperText={touched.preparation_time && errors.preparation_time}
              error={Boolean(
                touched.preparation_time && errors.preparation_time
              )}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              name="type"
              label={'Type'}
              value={values.type}
              fullWidth
              helperText={touched.type && errors.type}
              error={Boolean(touched.type && errors.type)}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            >
              {DISH_OPTIONS.map(
                (item: { value: string; label: string }, index: number) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                )
              )}
            </TextField>
          </Grid>
          {values.type && (
            <CreateDishFormConditionallyInputs type={values.type} />
          )}
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
      </Container>
    </form>
  );
};
