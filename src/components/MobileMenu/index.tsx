import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";

const MobileMenu: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Link href="/">
          <div className={styles.item}>
            <IconContext.Provider
              value={{
                className: `${styles.icon}`,
              }}
            >
              <div>
                <RiHome6Line />
              </div>
            </IconContext.Provider>
            <span>Мой Иви</span>
          </div>
        </Link>
        <Link href="/movies">
          <div className={styles.item}>
            <IconContext.Provider
              value={{
                className: `${styles.icon}`,
              }}
            >
              <div>
                <BsCollectionPlayFill />
              </div>
            </IconContext.Provider>
            <span>Каталог</span>
          </div>
        </Link>
        <Link href="/">
          {" "}
          <div className={styles.item}>
            <IconContext.Provider
              value={{
                className: `${styles.icon}`,
              }}
            >
              <div>
                <MdSearch />
              </div>
            </IconContext.Provider>
            <span>Поиск</span>
          </div>
        </Link>

        <Link href="/">
          <div className={styles.item}>
            <IconContext.Provider
              value={{
                className: `${styles.icon}`,
              }}
            >
              <div>
                <RiUser3Line />
              </div>
            </IconContext.Provider>
            <span>Профиль</span>
          </div>{" "}
        </Link>
        <Link href="/">
          <div className={styles.item}>
            <IconContext.Provider
              value={{
                className: `${styles.icon}`,
              }}
            >
              <div>
                <BsThreeDots />
              </div>
            </IconContext.Provider>
            <span>Ещё</span>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
