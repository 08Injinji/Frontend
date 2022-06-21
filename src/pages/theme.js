const size = {
  big_desktop: '1400px',
  desktop: '1024px',
  mobile: '768px',
  tablet: '1023px',
};

const device = {
  big_desktop: `screen and (min-width: ${size.desktop})`,
  desktop: `screen and (max-width: ${size.desktop})`,
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.tablet})`,
};

const theme = {
  device,
};

export { theme, size };
