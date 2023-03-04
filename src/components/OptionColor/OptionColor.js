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
                  setActiveColor(colorObj);
                  }}
                    type='button'
                    className={clsx(
                      colorClassName(colorObj),
                      colorObj === currentColor && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
    );
};

Product.propTypes = { props: PropTypes.any.isRequired };
export default OptionColor;