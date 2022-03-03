const size = {
  desktop: '1700px',
  mobile: '768px',
  tablet: '1400px',
};

const device = {
  desktop: `screen and (min-width: ${size.mobile})`,
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.tablet})`,
};

const theme = {
  device,
};

export default theme;
