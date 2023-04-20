import { FC } from "react";
import styles from './Button.module.scss';

type ButtonProps = {
  children?: any;
  className: string;
};

export const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={[styles.button, className].join(' ')}>
      {children}
    </button>
  );
};
