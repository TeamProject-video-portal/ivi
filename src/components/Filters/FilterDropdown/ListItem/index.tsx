import { FC, useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./index.module.scss";

type Props = {
  item: string;
  icon?: IconType;
  onClick: () => void;
  activeFilter?: boolean;
};

const ListItem: FC<Props> = ({ item, icon, onClick, activeFilter }) => {
  const IconItem = icon ? icon : undefined;

  const onClickHandler = () => {
    onClick();
  };

  return (
    <li className={`${styles.list} ${activeFilter && styles.active}`} onClick={onClickHandler}>
      <div className={styles.item} contentEditable="true">
        {item}
      </div>
      {icon && IconItem && <IconItem />}
    </li>
  );
};

export default ListItem;
