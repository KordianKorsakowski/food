export type DishType = 'pizza' | 'soup' | 'sandwich';
export interface DishDataModal {
  name: string;
  preparation_time: string;
  type: DishType | '';
  no_of_slices?: number | null;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number | null;
}

export interface ConditionallyProps {
  type: DishType;
}

export type AlertType = 'success' | 'info' | 'error';
export interface AlertData {
  message: string;
  type: AlertType;
}
