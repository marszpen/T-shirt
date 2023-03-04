import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
  const colorClassName = colorObj => {
    return styles['color' + colorObj[0].toUpperCase() + colorObj.substr(1).toLowerCase()];
  };
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map((colorObj) => (
                <li key={colorObj}>
                  <button onClick={() => {
                  props.setActiveColor(colorObj);
                  }}
                    type='button'
                    className={clsx(
                      colorClassName(colorObj),
                      colorObj === props.currentColor && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
    );
};

OptionColor.propTypes = { 
  colorObj: PropTypes.any.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired
 };
export default OptionColor;