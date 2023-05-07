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

export const CreateDishFormConditionallyInputs: React.FC<
  ConditionallyProps
> = ({ type }) => {
  const {
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    setFieldError,
    setFieldValue,
  } = useFormikContext<DishDataModal>();

  switch (type) {
    case 'pizza':
      return (
        <>
          <Grid item xs={12}>
            <TextField
              type="number"
              name="no_of_slices"
              label={'No. of slices'}
              value={values.no_of_slices}
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              name="diameter"
              label={'Diameter'}
              value={values.diameter}
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
        </>
      );
    case 'soup':
      return (
        <Grid item xs={12}>
          <FormLabel>Spiciness scale</FormLabel>
          <RadioGroup
            name="spiciness_scale"
            value={values.spiciness_scale}
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
          <TextField
            type="number"
            name="slices_of_bread"
            label={'Slices of bread'}
            value={values.slices_of_bread}
            fullWidth
            helperText={touched.slices_of_bread && errors.slices_of_bread}
            error={Boolean(touched.slices_of_bread && errors.slices_of_bread)}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </Grid>
      );
  }
};
