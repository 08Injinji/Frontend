import React from 'react';

const GridContext = React.createContext({
  columns: null,
});

const GridProvider = ({ children }) => {
  let [width, setWidth] = React.useState(null);
  let desktopQuery = matchMedia('screen and (min-width: 1024px)');
  let tabletQuery = matchMedia(
    'screen and (min-width: 768px) and (max-width: 1024px)',
  );
  let mobileQuery = matchMedia('screen and (max-width: 768px)');
  const [columns, setColumns] = React.useState(
    desktopQuery.matches
      ? 12
      : tabletQuery.matches
      ? 8
      : mobileQuery.matches
      ? 6
      : null,
  );

  React.useLayoutEffect(() => {
    function changeWidthState(e) {
      setWidth(e.currentTarget.innerWidth);
    }
    window.addEventListener('resize', changeWidthState);
    return () => {
      window.removeEventListener('resize', changeWidthState);
    };
  }, []);

  React.useEffect(() => {
    console.log(`width changed: ${width}, ${columns}`);
    setColumns(
      desktopQuery.matches
        ? 12
        : tabletQuery.matches
        ? 8
        : mobileQuery.matches
        ? 6
        : null,
    );
  }, [width, desktopQuery, tabletQuery, mobileQuery, columns]);

  return (
    <GridContext.Provider value={columns}>{children}</GridContext.Provider>
  );
};

export { GridContext, GridProvider };
