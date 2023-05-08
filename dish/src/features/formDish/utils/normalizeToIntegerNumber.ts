export const normalizeToIntegerNumber = (props: {
  value: string;
  min: number;
  max: number;
}) => {
  const { value, min, max } = props;
  if (+value >= min && +value <= max) {
    return value.replace(/\s/g, '');
  } else {
    return '';
  }
};
