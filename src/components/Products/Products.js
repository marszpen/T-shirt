import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';

const Products = () => {
  const [products]  = useState(productsData);

  return ( 
    <section>
      {products.map (product => <Product key={product.id} {...product} />)}
    </section>
  );
};

Product.propTypes = { props: PropTypes.any.isRequired };
export default Products;