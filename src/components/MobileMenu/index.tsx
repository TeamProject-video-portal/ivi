import { FC, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { Button } from "../Button/Button";
import { MobileModal } from "./MobileModal";

const MobileMenu: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
          <Link href="https://www.ivi.ru/movies?ivi_search" >
            <div div className={styles.item}>
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
          </Link >
          <Link href="https://www.ivi.ru/tvplus">
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
            </div>
          </Link >
          <Button>
            <div className={`${styles.item}  ${open && styles.item_open}`} onClick={() => setOpen(!open)}>
              <IconContext.Provider
                value={{
                  className: `${styles.icon}`,
                }}
              >
                <div>
                  {open ? <CgClose /> : <BsThreeDots />}
                </div>
              </IconContext.Provider>
              <span>{open ? 'Закрыть' : 'Ещё'}</span>
            </div>
          </Button>
        </div >
      </div >
      <MobileModal open={open} />
    </>
  );
};

export default MobileMenu;
