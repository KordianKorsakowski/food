export const normalizeToIntegerNumber = (props: {
  value: string;
  min: number;
  max: number;
}) => {
  const { value, min, max } = props;
  console.log(value);
  if (+value >= min && +value <= max) {
    console.log(value);
    return value.replace(/\s/g, '');
  } else {
    return '';
  }
};
