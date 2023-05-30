import { FC } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./index.module.scss";

type ListItemProps = {
  item: string;
  icon?: IconType;
  onClick?: () => void;
};

const ListItem: FC<ListItemProps> = ({ item, icon, onClick }) => {
  const IconItem = icon ? icon : undefined;

  return (
    <li className={styles.list} onClick={onClick}>
      <div className={styles.item}>{item}</div>
      {icon && IconItem && <IconItem />}
    </li>
  );
};

export default ListItem;
