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
  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setModal(false);
    setActiveItem(e.target.closest(`.${styles.item}`).dataset.title)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <Link href="/">
            <div className={`${styles.item}  ${(activeItem == "ivi") && styles.item_open}`} data-title="ivi" onClick={onClickHandler}>
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
            <div className={`${styles.item}  ${(activeItem == "catalog") && styles.item_open}`} data-title="catalog" onClick={onClickHandler}>
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
          <Link href="https://www.ivi.ru/profile?ivi_search" >
            <div className={`${styles.item}  ${(activeItem == "search") && styles.item_open}`} data-title="search" onClick={onClickHandler}>
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
          <Link href="/">
            <div className={`${styles.item}  ${(activeItem == "profile") && styles.item_open}`} data-title="profile" onClick={onClickHandler}>
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
            <div className={`${styles.item}  ${modal && styles.item_open}`} data-title="more" onClick={(e) => { setModal(!modal); setActiveItem(e.target.dataset.title) }}>
              <IconContext.Provider
                value={{
                  className: `${styles.icon}`,
                }}
              >
                <div>
                  {modal ? <CgClose /> : <BsThreeDots />}
                </div>
              </IconContext.Provider>
              <span>{modal ? 'Закрыть' : 'Ещё'}</span>
            </div>
          </Button>
        </div >
      </div >
      <MobileModal modal={modal} />
    </>
  );
};

export default MobileMenu;
