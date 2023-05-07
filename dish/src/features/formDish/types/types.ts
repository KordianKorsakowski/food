export interface DishDataModal {
  name: string;
  preparation_time: string;
  type: 'pizza' | 'soup' | 'sandwich' | '';
  no_of_slices?: number | null;
  diameter?: number | null;
  spiciness_scale?: number;
  slieces_of_bread?: number | null;
}

export interface ConditionallyProps {
  type: 'pizza' | 'soup' | 'sandwich';
}
