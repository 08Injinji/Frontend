import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { ProductName, ProductMenu } from './styles';
import Trailer from './trailer';
import Ecowool from './ecowool';
import Liner from './liner';
import Runner from './runner';

const Product = () => {
  let { item } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [title, setTitle] = useState('liner');
  const [active, setActive] = useState('WhiteSocks');

  useEffect(() => {
    setActive('WhiteSocks');
    setTitle(pathname.split('/')[2]);
  }, [pathname]);

  const Product = ({ title, name }) => {
    const handleProduct = () => {
      setTitle(title);
      navigate(`/product/${title}`, { replace: true });
    };

    return (
      <ProductName
        params={item}
        name={name}
        title={title}
        onClick={handleProduct}
      >
        {name}
      </ProductName>
    );
  };

  return (
    <>
      <ProductMenu>
        <Product title="liner" name="Liner"></Product>
        <Product title="runner" name="Runner"></Product>
        <Product title="trailer" name="Trailer"></Product>
        <Product title="ecowool" name="Eco-wool"></Product>
      </ProductMenu>
      <div style={{ transform: 'translateY(55px)' }}>
        {
          {
            liner: <Liner active={active} setActive={setActive} />,
            runner: <Runner active={active} setActive={setActive} />,
            trailer: <Trailer active={active} setActive={setActive} />,
            ecowool: <Ecowool active={active} setActive={setActive} />,
          }[title]
        }
      </div>
    </>
  );
};

export default Product;
