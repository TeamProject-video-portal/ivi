import { FC, useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./index.module.scss";

type ListItemProps = {
  item: string;
  icon?: IconType;
  onClick: () => void;
  activeFilter?: boolean;
};

const ListItem: FC<ListItemProps> = ({ item, icon, onClick, activeFilter }) => {
  const IconItem = icon ? icon : undefined;

  const onClickHandler = () => {
    onClick();
  };

  return (
    <li className={`${styles.list} ${activeFilter && styles.active}`} onClick={onClickHandler}>
      <div className={styles.item}>{item}</div>
      {icon && IconItem && <IconItem />}
    </li>
  );
};

export default ListItem;
