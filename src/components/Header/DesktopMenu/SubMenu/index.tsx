import { Dispatch, FC, SetStateAction } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Ad from "./Ad/Ad";

type Props = {
  isOpenSubMenu: boolean;
  setIsOpenSubMenu: Dispatch<SetStateAction<boolean>>;
};

const SubMenu: FC<Props> = (props) => {
  return (
    <div
      className={styles.container}
      onMouseLeave={() => props.setIsOpenSubMenu(false)}
    >
      {props.isOpenSubMenu && (
        <div className={styles.wrapper}>
          <div className={styles.bg_div}></div>
          <div className={styles.content}>
            <div className={styles.list}>
              {" "}
              <h5>Жанры</h5>
              <p>Артхаус</p>
              <p>Боевик</p>
              <p>Вестерн</p>
              <p>something titles</p>
              <p>something titles</p>
            </div>
            <Ad />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubMenu;
