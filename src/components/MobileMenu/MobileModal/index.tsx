import { FC } from "react";
import styles from './index.module.scss';
import Link from "next/link";


type MobileModalProps = {
  open: boolean;
};

export const MobileModal: FC<MobileModalProps> = ({ open }) => {
  return (
    <div className={open ? styles.mobileModal_open : styles.mobileModal}>
      <h1>{open && 'Modal'}</h1>
    </div>
  );
};