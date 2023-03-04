import PropTypes from 'prop-types';

const ProductForm = (props) => {
    <form>
        <OptionSize currentSize={currentSize} setActiveSize={setActiveSize}/>
        <OptionColor currentColor={currentColor} setActiveColor={setActiveColor}/>
    </form>
};

Product.propTypes = { props: PropTypes.any.isRequired };
export default ProductForm;