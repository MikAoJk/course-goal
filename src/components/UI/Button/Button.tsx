import styles from './Button.module.css';
import {ReactNode} from "react";

interface ButtonProps {
    type: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    children: ReactNode;
}

const Button = (buttonProps: ButtonProps) => {
    return (
        <button type={buttonProps.type} className={styles.button} onClick={buttonProps.onClick}>
            {buttonProps.children}
        </button>
    );
};

export default Button;