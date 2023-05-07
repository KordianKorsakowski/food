export interface DishDataModal {
  name: string;
  preparation_time: string;
  type: 'pizza' | 'soup' | 'sandwich' | '';
  no_of_slices?: number | null;
  diameter?: number | null;
  spiciness_scale?: number;
  slices_of_bread?: number | null;
  submit?: string | undefined;
}

export interface ConditionallyProps {
  type: 'pizza' | 'soup' | 'sandwich';
}
