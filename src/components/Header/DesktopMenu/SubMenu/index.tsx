import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const SubMenu: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg_div}>
        <div className={styles.content}></div>
      </div>
    </div>
  );
};

export default SubMenu;
