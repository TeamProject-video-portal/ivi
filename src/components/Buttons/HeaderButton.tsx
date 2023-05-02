import { FC, MouseEventHandler, ReactNode, useState } from "react";
import styles from "./index.module.scss";

export type HeaderButtonProps = {
  children?: ReactNode | ReactNode[];
  type?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const HeaderButton: FC<HeaderButtonProps> = ({
  children,
  type,
  onClick,
}) => {
  let cssClass = "";
  let content;

  return (
    <button className={styles[cssClass]} onClick={onClick}>
      {content}
    </button>
  );
};
