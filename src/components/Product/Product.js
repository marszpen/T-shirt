import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import { useState } from 'react';

const Product = props => {
  const [currentSize, setActiveSize] = useState (props.sizes[0].name);
  const [currentColor, setActiveColor] = useState(props.colors[0]); 
  const getPrice = () => {
    return props.basePrice + props.sizes[0];
  };

  return (
    <article className={styles.product}>
      <ProductImage />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
        <ProductForm />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = { props: PropTypes.any.isRequired };
export default Product;