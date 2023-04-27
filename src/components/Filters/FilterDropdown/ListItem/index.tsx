import { MouseEventHandler, FC } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import styles from './index.module.scss'

type ListItemProps = {
  item: string;
  href: string;
  icon?: IconType;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

const ListItem: FC<ListItemProps> = ({ item, href, icon, onClick }) => {
  const IconItem = icon ? icon : undefined;

  return (
    <li className={styles.list} onClick={onClick}>
      <Link href={href}>{item}</Link>
      {icon && IconItem && <IconItem />}
    </li>
  );
};

export default ListItem;