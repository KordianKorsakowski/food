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
  const { handleBlur, handleChange, values, touched, errors } =
    useFormikContext<DishDataModal>();
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
            name="slieces_of_bread"
            label={'Slieces of bread'}
            value={values.slieces_of_bread}
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={touched.type && errors.type}
            error={Boolean(touched.type && errors.type)}
            required
          />
        </Grid>
      );
  }
};
