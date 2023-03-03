import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

const OptionColor = () => {
  const [currentColor, setActiveColor] = useState(props.colors[0]); 
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

export default OptionColor;