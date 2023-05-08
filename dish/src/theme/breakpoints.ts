export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '550px',
  tablet: '768px',
  laptop: '1100px',
  laptopL: '1440px',
} as const;

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
} as const;
