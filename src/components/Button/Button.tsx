import { FC, MouseEventHandler } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children?: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={[styles.button, className].join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};
