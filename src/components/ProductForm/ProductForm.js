import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss'


const ProductForm = (props) => {
    <form>
        <OptionSize currentSize={props.currentSize} setActiveSize={props.setActiveSize}/>
        <OptionColor currentColor={props.currentColor} setActiveColor={props.setActiveColor}/>
        <Button className={styles.button} type={'submit'}>
        <span className='fa fa-shopping-cart' />
        </Button>
    </form>
};

ProductForm.propTypes = {   
    sizeObj: PropTypes.array.isRequired,
    colorObj: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    setCurrentPrice: PropTypes.func.isRequired
 };
 
export default ProductForm;