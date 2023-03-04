import styles from './Container.module.scss';
import PropTypes from 'prop-types';

const Container = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
};

Product.propTypes = { props: PropTypes.any.isRequired };
export default Container;