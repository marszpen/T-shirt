import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState } from 'react';

const Product = (props) => {
  const [currentSize, setActiveSize] = useState (props.sizes[0].name);
  const [currentColor, setActiveColor] = useState(props.colors[0]); 
  const getPrice = () => {
    return props.basePrice + props.sizes[0];
  };
  const cart = () => {
    console.log('Summary');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
        <ProductForm 
        sizes={props.sizes}
        sizeObj={props.sizeObj}
        currentSize={currentSize}
        setCurrentSize={setActiveSize}
        price={props.currentPrice}
        colorObj={props.colorObj}
        currentColor={currentColor}
        setCurrentColor={setActiveColor}
        onClick={props.onClick}
        cart ={cart}
        />
        </form>
      </div>
    </article>
  )
};

Product.propTypes = { 
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colorObj: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired, };
export default Product;