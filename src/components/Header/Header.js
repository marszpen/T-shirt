import styles from './Header.module.scss';
import PropTypes from 'prop-types';

const Header = (props) => (
    <header>
        <h1 className={styles.title}>ShopApp</h1>
    </header>
);

Header.propTypes = { 
    title: PropTypes.any.isRequired 
};
export default Header;

