import { DishDataModal } from '../types/types';

export const setPayload = (data: DishDataModal) => {
  switch (data.type) {
    case 'pizza':
      return {
        name: data.name,
        preparation_time: data.preparation_time.split(' ').join(':'),
        type: data.type,
        no_of_slices: data.no_of_slices,
        diameter: data.diameter,
      };
    case 'sandwich':
      return {
        name: data.name,
        preparation_time: data.preparation_time.split(' ').join(':'),
        type: data.type,
        slices_of_bread: data.slices_of_bread,
      };
    case 'soup':
      return {
        name: data.name,
        preparation_time: data.preparation_time.split(' ').join(':'),
        type: data.type,
        spiciness_scale: data.spiciness_scale,
      };
  }
};
