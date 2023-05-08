import { DishDataModal } from '../types/types';

export const setPayload = (data: DishDataModal) => {
  const basicValues = {
    name: data.name,
    preparation_time: data.preparation_time.split(' ').join(':'),
    type: data.type,
  };
  switch (data.type) {
    case 'pizza':
      return {
        ...basicValues,
        no_of_slices: data.no_of_slices,
        diameter: data.diameter,
      };
    case 'sandwich':
      return {
        ...basicValues,
        slices_of_bread: data.slices_of_bread,
      };
    case 'soup':
      return {
        ...basicValues,
        spiciness_scale: data.spiciness_scale,
      };
  }
};
