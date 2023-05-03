import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

export type ButtonProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  color?: 'pink' | 'darkbluegrey' | 'purple';
  type?: 'chatButton' | 'footerIconButton' | 'footerStoresButton' | 'socialButton' | 'subscribeButton' | 'deviceButton';
  width?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<ButtonProps> = ({ children, className, color, type, width, onClick }) => {
  const cssClass = [styles.button, className];
  if (color === 'pink') { cssClass.push(styles.pink) };
  if (color === 'darkbluegrey') { cssClass.push(styles.darkbluegrey) };
  if (color === 'purple') { cssClass.push(styles.purple) };
  if (type === 'chatButton') { cssClass.push(styles.chatButton) };
  if (type === 'footerIconButton') { cssClass.push(styles.footerIconButton) };
  if (type === 'footerStoresButton') { cssClass.push(styles.footerStoresButton) };
  if (type === 'socialButton') { cssClass.push(styles.socialButton) };
  if (type === 'subscribeButton') { cssClass.push(styles.subscribeButton) };
  if (type === 'deviceButton') { cssClass.push(styles.deviceButton) };

  return (
    <button className={cssClass.join(" ")} style={{ width: `${width}` }} onClick={onClick}>
      {children}
    </button>
  );
};
