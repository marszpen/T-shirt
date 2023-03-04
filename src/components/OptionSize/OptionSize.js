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
                className={clsx(sizeObj.name === props.currentSize && styles.active)}
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

OptionSize.propTypes = { 
  sizeObj: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setActiveSize: PropTypes.func.isRequired,
  setActivePrice: PropTypes.func.isRequired
 };
export default OptionSize;