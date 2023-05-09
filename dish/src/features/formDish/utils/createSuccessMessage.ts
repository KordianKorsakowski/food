import { AlertData, DishDataModal } from '../types/types';

export const createSuccessMessage = (data: DishDataModal): AlertData => {
  let typeInfo = '';
  switch (data.type) {
    case 'pizza':
      typeInfo = `with a diameter ${data.diameter}. Cut into ${data.no_of_slices} slices`;
      break;
    case 'sandwich':
      typeInfo = `from ${data.slices_of_bread} slices of bread`;
      break;
    case 'soup':
      typeInfo = `with a ${data.spiciness_scale} on the spiciness scale`;
      break;
  }
  return {
    message: `Succes you created a ${data.type} (${data.name}) ${typeInfo}. Time prepares it ${data.preparation_time}`,
    type: 'success',
  };
};
