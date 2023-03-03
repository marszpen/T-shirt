import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    return (<button onClick={props.action} ClassName={clsx(styles.button, props.className)}>{props.children}</button>);
};

export default Button;