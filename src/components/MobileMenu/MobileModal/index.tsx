import { FC } from "react";
import styles from './index.module.scss';
import Link from "next/link";
import { Button } from "@/components/Button/Button";
import Socials from "@/components/Socials";
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
import { Header } from "@/components/Header";

type MobileModalProps = {
  modal: boolean;
};

export const MobileModal: FC<MobileModalProps> = ({ modal }) => {
  return (
    <div>
      <div className={modal ? styles.modalHeader_open : styles.modalHeader} ><Header /></div>
      <div className={modal ? styles.mobileModal_open : styles.mobileModal}>
        <div className={styles.container}>
          <div className={styles.group}>
            <div className={styles.buttons}>
              <Link href={'/'}>
                <Button className={styles.subscribe} type='subscribeButton' color='purple'>
                  <IoDiamondOutline />
                  Подключить подписку
                </Button>
              </Link>
              <Link href={'https://www.ivi.ru/cert'}>
                <Button type='subscribeButton' color='purple'>
                  <RiAwardLine />
                  Активация сертификата
                </Button>
              </Link>
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
                <ModalListItem key="TV+" icon={BsTv} text="TV+">
                  <ul className={styles.listTV}>
                    <li><h3>TB онлайн</h3></li>
                    <li><Link href={'https://www.ivi.ru/tvplus#'}>ТВ-каналы</Link></li>
                    <li><Link href={'https://www.ivi.ru/tvplus/razvlekatelnoe'}>Развлекательное</Link></li>
                    <li><Link href={'https://www.ivi.ru/tvplus/deti'}>Дети</Link></li>
                    <li><Link href={'https://www.ivi.ru/tvplus/sport'}>Спортивное ТВ</Link></li>
                    <li><Link href={'https://www.ivi.ru/tvplus/documentalnoe'}>Документальное</Link></li>
                  </ul>
                </ModalListItem>
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
              <ModalListItem icon={GoInfo} text="О нас">
                <ul className={styles.listAbout}>
                  <li key='0'>
                    <Link href={'https://corp.ivi.ru/'}>О компании</Link>
                  </li>
                  <li key='1'>
                    <Link href={'https://corp.ivi.ru/career/#career-vacancy-block'}>Вакансии</Link>
                  </li>
                  <li key='2'>
                    <Link href={'https://www.ivi.ru/pages/beta/'}>Программа бета-тестирования</Link>
                  </li>
                  <li key='3'>
                    <Link href={'https://www.ivi.ru/info/partners'}>Общая информация для партнёров</Link>
                  </li>
                  <li key='4'>
                    <Link href={'https://corp.ivi.ru/advertisers/'}>Размещение рекламы</Link>
                  </li>
                  <li key='5'>
                    <Link href={'https://www.ivi.ru/info/agreement'}>Пользовательское соглашение</Link>
                  </li>
                  <li key='6'>
                    <Link href={'https://www.ivi.ru/info/confidential'}>Политика конфиденциальности</Link>
                  </li>
                  <li key='7'>
                    <Link href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'}>Комплаенс</Link>
                  </li>
                </ul>
              </ModalListItem>
              <li><Link href={'https://www.ivi.ru/code'} className={styles.link}><TbDeviceTv />Вход по коду</Link></li>
            </ul>
            <div className={`${styles.buttons} ${styles.buttons_dev}`}>
              <Link href={'https://www.ivi.ru/pages/tvsmart/'}>
                <Button type='deviceButton' color='purple'>
                  <BsTvFill />
                  <div>
                    <span>Смотрите на</span>
                    <div>Smart TV</div>
                  </div>
                </Button>
              </Link>
              <Link href={'https://www.ivi.ru/devices'}>
                <Button type='deviceButton' color='purple'>
                  <MdDevicesOther />
                  <div>
                    <div>Все устройства</div>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.group}>
            <ModalListItem icon={BiMessageAlt} text="Служба поддержки">
              <p className={styles.help}>Мы всегда готовы вам помочь.<br />Наши операторы онлайн 24/7</p>
              <div className={`${styles.buttons} ${styles.buttons_chat}`}>
                <Link href={'https://www.ivi.ru/profile'}>
                  <Button className={styles.buttonChat} color='purple'>Написать в чате</Button>
                </Link>
                <div className={styles.buttonsIcon}>
                  <Link href={'mailto:support@ivi.ru'} type="email">
                    <Button type='footerIconButton' color='purple'><GoMail /></Button>
                  </Link>
                  <Link href={'tel:+73832021280'} type='tel'>
                    <Button type='footerIconButton' color='purple'><HiOutlinePhone /></Button>
                  </Link>
                </div>
              </div>
              <Link href={'https://ask.ivi.ru/'} className={styles.ask}>ask.ivi.ru</Link>
              <p>Ответы на вопросы</p>
            </ModalListItem>
          </div>
          <div className={styles.group}>
            <Socials />
            <p className={styles.copyright}>© 2023 ООО «Иви.ру»</p>
          </div>
        </div>
      </div >
    </div >
  );
};