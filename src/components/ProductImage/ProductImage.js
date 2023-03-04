import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = (props) => {
    return (
    <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    </div>
    );
};

ProductImage.propTypes = {
    imageContainer:PropTypes.array.isRequired,
    image:PropTypes.array.isRequired,
    title:PropTypes.array.isRequired,
    name:PropTypes.array.isRequired,
    currentColor:PropTypes.array.isRequired
}
export default ProductImage;