const size = {
  desktop: '1700px',
  mobile: '768px',
};

const device = {
  desktop: `screen and (min-width: ${size.mobile})`,
  mobile: `screen and (max-width: ${size.mobile})`,
};

const theme = {
  device,
};

export default theme;
