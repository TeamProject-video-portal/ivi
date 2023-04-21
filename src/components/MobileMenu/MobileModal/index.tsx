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

type MobileModalProps = {
  open: boolean;
};

export const MobileModal: FC<MobileModalProps> = ({ open }) => {
  return (
    <div className={open ? styles.mobileModal_open : styles.mobileModal}>
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
              <li className={styles.link}><BiCameraMovie />Фильмы<span><HiOutlineChevronDown /></span></li>
              <li className={styles.link}><MdOutlineVideoLibrary />Сериалы<span><HiOutlineChevronDown /></span></li>
              <li className={styles.link}><WiTrain />Мультфильмы<span><HiOutlineChevronDown /></span></li>
              <li className={styles.link}><BsTv />TV+<span><HiOutlineChevronDown /></span></li>
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
            <li className={styles.link}><GoInfo />О нас<span><HiOutlineChevronDown /></span></li>
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
          <li className={styles.link}><BiMessageAlt />Служба поддержки<span><HiOutlineChevronDown /></span></li>
        </div>
        <div className={styles.group}>
          <Socials />
          <p className={styles.copyright}>© 2023 ООО «Иви.ру»</p>
        </div>
      </div>
    </div >
  );
};