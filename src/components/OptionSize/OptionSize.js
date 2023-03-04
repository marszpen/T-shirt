import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
  
    
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(sizeObj => (
            <li>
              <button
                className={clsx(sizeObj.name === currentSize && styles.active)}
                  type="button"
                  onClick={() => props.setActiveSize(sizeObj.name)}
              >
              {sizeObj.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
};

Product.propTypes = { props: PropTypes.any.isRequired };
export default OptionSize;