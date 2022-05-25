const size = {
  desktop: '1024px',
  mobile: '768px',
  tablet: '1023px',
};

const device = {
  desktop: `screen and (min-width: ${size.mobile})`,
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.tablet})`,
};

const theme = {
  device,
};

export { theme, size };
