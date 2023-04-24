import { FC, useState } from "react";
import { IconType } from 'react-icons';
import styles from "./index.module.scss"
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";

type ModalListItemProps = {
  icon?: IconType;
  text: string;
  children?: any;
};

export const ModalListItem: FC<ModalListItemProps> = ({ icon, text, children }) => {
  const [open, setOpen] = useState(false);
  const IconItem = icon ? icon : undefined;
  return (
    <>
      <li className={styles.link} onClick={() => setOpen(!open)}>
        {icon && IconItem && <IconItem />}
        {text}
        <span> {open ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}</span>
      </li>
      {open && (<div className={styles.subMenu}>{children}</div>)}
    </>
  );
};