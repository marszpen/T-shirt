import styles from './Header.module.scss';
import PropTypes from 'prop-types';

const Header = () => (
    <header>
        <h1 className={styles.title}>ShopApp</h1>
    </header>
);

Product.propTypes = { props: PropTypes.any.isRequired };
export default Header;

