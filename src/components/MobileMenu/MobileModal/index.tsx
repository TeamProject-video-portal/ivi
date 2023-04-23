import { FC } from "react";
import styles from './index.module.scss';
import Link from "next/link";
import { Button } from "@/components/Button/Button";
import { Socials } from "@/components/Socials/Socials";
import { IoDiamondOutline } from "react-icons/io5";
import { RiAwardLine } from "react-icons/ri";
import { BsTvFill, BsTv } from "react-icons/bs";
import { BiCameraMovie, BiMessageAlt } from "react-icons/bi";
import { WiTrain } from "react-icons/wi";
import { GoInfo, GoMail } from "react-icons/go";
import { TbDeviceTv } from "react-icons/tb";
import { MdDevicesOther, MdOutlineVideoLibrary } from "react-icons/md";
import { HiOutlinePhone, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import { ModalListItem } from "./ModalListItem";
import { ContextSubMenu } from "@/components/ContextSubMenu";
import { DropDownMenuFilm } from "@/components/ContextSubMenu/DropDownMenuFilm";
import { DropDownMenuAnim } from "@/components/ContextSubMenu/DropDownMenuAnim";
import { DropDownMenuSerial } from "@/components/ContextSubMenu/DropDownMenuSerial";

type MobileModalProps = {
  modal: boolean;
};

export const MobileModal: FC<MobileModalProps> = ({ modal }) => {
  return (
    <div className={modal ? styles.mobileModal_open : styles.mobileModal}>
      <div className={styles.container}>
        <div className={styles.group}>
          <div className={styles.buttons}>
            <Button className={styles.buttonTop}>
              <IoDiamondOutline />
              Подключить подписку
            </Button>
            <Button className={styles.buttonTop}>
              <RiAwardLine />
              Активация сертификата
            </Button>
          </div>
        </div>
        <div className={styles.group}>
          <nav>
            <ul className={styles.list}>
              <li><Link href={'/'} className={styles.link}>Мой Иви</Link></li>
              <li><Link href={'https://www.ivi.ru/new'} className={styles.link}>Что нового</Link></li>
              <ModalListItem key="Фильмы" icon={BiCameraMovie} text="Фильмы">
                <ContextSubMenu className={styles.contextMenu} title="Все фильмы">
                  <DropDownMenuFilm />
                </ContextSubMenu>
              </ModalListItem>
              <ModalListItem key="Сериалы" icon={MdOutlineVideoLibrary} text="Сериалы">
                <ContextSubMenu className={styles.contextMenu} title="Все сериалы">
                  <DropDownMenuSerial />
                </ContextSubMenu>
              </ModalListItem>
              <ModalListItem key="Мультфильмы" icon={WiTrain} text="Мультфильмы">
                <ContextSubMenu className={styles.contextMenu} title="Все мультфильмы">
                  <DropDownMenuAnim />
                </ContextSubMenu>
              </ModalListItem>
              <ModalListItem key="TV+" icon={BsTv} text="TV+" />
              <li><Link href={'https://www.ivi.ru/goodmovies'} className={styles.link}>Что посмотреть</Link></li>
            </ul>
          </nav>
        </div>
        <div className={styles.group}>
          <ul className={styles.list}>
            <li><Link href={'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'} className={styles.link}>Иви.Рейтинг фильмы</Link></li>
            <li><Link href={'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'} className={styles.link}>Иви.Рейтинг сериалы</Link></li>
          </ul>
        </div>
        <div className={styles.group}>
          <ul className={styles.list}>
            <ModalListItem icon={GoInfo} text="О нас" />
            <li><Link href={'https://www.ivi.ru/code'} className={styles.link}><TbDeviceTv />Вход по коду</Link></li>
          </ul>
          <div className={`${styles.buttons} ${styles.buttons_dev}`}>
            <Button className={styles.buttonBottom}>
              <BsTvFill />
              <div>
                <span>Смотрите на</span>
                <div>Smart TV</div>
              </div>
            </Button>
            <Button className={styles.buttonBottom}>
              <MdDevicesOther />
              <div>
                <div>Все устройства</div>
              </div>
            </Button>
          </div>
        </div>
        <div className={styles.group}>
          <ModalListItem icon={BiMessageAlt} text="Служба поддержки" />
        </div>
        <div className={styles.group}>
          <Socials />
          <p className={styles.copyright}>© 2023 ООО «Иви.ру»</p>
        </div>
      </div>
    </div >
  );
};