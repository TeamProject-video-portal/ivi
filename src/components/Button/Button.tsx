import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

export type ButtonProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  color?: 'pink' | 'darkbluegrey' | 'purple';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<ButtonProps> = ({ children, className, color, onClick }) => {
  const cssClass = [styles.button, className];
  if (color === 'pink') { cssClass.push(styles.pink) };
  if (color === 'darkbluegrey') { cssClass.push(styles.darkbluegrey) };
  if (color === 'purple') { cssClass.push(styles.purple) };

  return (
    <button className={cssClass.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};
