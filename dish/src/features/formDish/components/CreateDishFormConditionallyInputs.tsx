import {
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useFormikContext } from 'formik';
import { ConditionallyProps, DishDataModal } from '../types/types';
import { SACALE_FOR_SPICINESS } from '../constants/constants';
import { normalizeToIntegerNumber } from '../utils/normalizeToIntegerNumber';
import { useEffect, useState } from 'react';
import { normalizeDecimalNumber } from '../utils/normalizeDecimalNumber';
import { NumberTextFiled } from './NumberTextFiled';

export const CreateDishFormConditionallyInputs: React.FC<
  ConditionallyProps
> = ({ type }) => {
  const { handleBlur, handleChange, values, touched, errors, setFieldValue } =
    useFormikContext<DishDataModal>();
  const [diameterValue, setDiameterValue] = useState<string>('');
  useEffect(() => {
    setFieldValue('diameter', diameterValue);
  }, [values.diameter, setFieldValue, diameterValue]);
  switch (type) {
    case 'pizza':
      return (
        <>
          <Grid item xs={12}>
            <TextField
              type="string"
              name="no_of_slices"
              label={'No. of slices(1-100)'}
              value={values.no_of_slices || ''}
              fullWidth
              onBlur={handleBlur}
              helperText={touched.no_of_slices && errors.no_of_slices}
              error={Boolean(touched.no_of_slices && errors.no_of_slices)}
              onChange={(e) => {
                const { value } = e.target;
                setFieldValue(
                  'no_of_slices',
                  normalizeToIntegerNumber({ value: value, min: 1, max: 100 })
                );
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <NumberTextFiled
              type="number"
              name="diameter"
              label={'Diameter'}
              value={diameterValue}
              fullWidth
              onBlur={handleBlur}
              helperText={touched.diameter && errors.diameter}
              error={Boolean(touched.diameter && errors.diameter)}
              onChange={(e) => {
                const { value } = e.target;
                normalizeDecimalNumber({
                  value: value,
                  setterFn: setDiameterValue,
                });
              }}
            />
          </Grid>
        </>
      );
    case 'soup':
      return (
        <Grid item xs={12}>
          <FormLabel>Spiciness scale *</FormLabel>
          <RadioGroup
            name="spiciness_scale"
            value={values.spiciness_scale || ''}
            onChange={handleChange}
            row
          >
            {SACALE_FOR_SPICINESS.map(
              (item: { value: number; label: string }, index: number) => (
                <FormControlLabel
                  key={index}
                  value={item.value}
                  control={<Radio />}
                  label={item.label}
                />
              )
            )}
          </RadioGroup>
        </Grid>
      );
    case 'sandwich':
      return (
        <Grid item xs={12}>
          <NumberTextFiled
            type="number"
            name="slices_of_bread"
            label={'Slices of bread(1-30)'}
            value={values.slices_of_bread}
            fullWidth
            helperText={touched.slices_of_bread && errors.slices_of_bread}
            error={Boolean(touched.slices_of_bread && errors.slices_of_bread)}
            onBlur={handleBlur}
            onChange={(e) => {
              const { value } = e.target;
              setFieldValue(
                'slices_of_bread',
                normalizeToIntegerNumber({ value: value, min: 1, max: 30 })
              );
            }}
            required
          />
        </Grid>
      );
  }
};
