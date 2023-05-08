export const normalizeDecimalNumber = (props: {
  value: string;
  setterFn: (v: string) => void;
}) => {
  const { value, setterFn } = props;
  if (value.includes('.')) {
    const arr = value.split('.');
    if (arr[1].length > 2) {
      return;
    } else {
      setterFn(value);
    }
  } else {
    setterFn(value);
  }
};
