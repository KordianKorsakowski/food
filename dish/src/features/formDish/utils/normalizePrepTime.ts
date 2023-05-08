export const normalizePrepTime = (value: string) => {
  if (value >= '0' && value <= '9') {
    if (value.includes(' ')) {
      const arr = value.split(' ');
      if (Number(arr[0]) > 24 && arr[0].length === 2) {
        return '';
      }
      if (Number(arr[1]) > 59 && arr[1].length === 2) {
        return '';
      }
      if (Number(arr[2]) > 59 && arr[2].length === 2) {
        return '';
      }
    }
    const arr = value.split(' ');
    console.log(arr);
    return (
      value
        .replace(/\s/g, '')
        .match(/.{1,2}/g)
        ?.join(' ')
        .substr(0, 8) || ''
    );
  } else {
    return '';
  }
};
