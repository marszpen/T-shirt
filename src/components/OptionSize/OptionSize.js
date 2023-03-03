import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

const OptionSize = (props) => {
  const [currentSize, setActiveSize] = useState (props.sizes[0].name);
    
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(sizeObj => (
            <li>
              <button
                className={clsx(sizeObj.name === currentSize && styles.active)}
                  type="button"
                  onClick={() => setActiveSize(sizeObj.name)}
              >
              {sizeObj.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default OptionSize;