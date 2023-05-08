export type DishType = 'pizza' | 'soup' | 'sandwich';
export interface DishDataModal {
  name: string;
  preparation_time: string;
  type: DishType | '';
  no_of_slices?: number | null;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number | null;
  submit?: string | undefined;
}

export interface ConditionallyProps {
  type: DishType;
}
