import { FC } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss"
import { Button } from "../Button/Button";
import { IoMailOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { MdDevicesOther } from 'react-icons/md';
import { BsTvFill } from 'react-icons/bs';
import { HiOutlinePhone, HiOutlineSpeakerphone } from "react-icons/hi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
import speakerphone from "../../images/speakerphone.png"
import { Socials } from "../Socials/Socials";

export const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.content}>
          <nav className={styles.cols}>
            <h3 className={styles.cols__title}>О нас</h3>
            <ul className={styles.list}>
              <li key='0'>
                <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>О компании</Link>
              </li>
              <li key='1'>
                <Link href={'https://corp.ivi.ru/career/#career-vacancy-block'} className={styles.list__link}>Вакансии</Link>
              </li>
              <li key='2'>
                <Link href={'https://www.ivi.ru/pages/beta/'} className={styles.list__link}>Программа бета-тестирования</Link>
              </li>
              <li key='3'>
                <Link href={'https://www.ivi.ru/info/partners'} className={styles.list__link}>Информация для партнёров</Link>
              </li>
              <li key='4'>
                <Link href={'https://corp.ivi.ru/advertisers/'} className={styles.list__link}>Размещение рекламы</Link>
              </li>
              <li key='5'>
                <Link href={'https://www.ivi.ru/info/agreement'} className={styles.list__link}>Пользовательское соглашение</Link>
              </li>
              <li key='6'>
                <Link href={'https://www.ivi.ru/info/confidential'} className={styles.list__link}>Политика конфиденциальности</Link>
              </li>
              <li key='7'>
                <Link href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'} className={styles.list__link}>Комплаенс</Link>
              </li>
            </ul>
          </nav>
          <nav className={styles.cols}>
            <h3 className={styles.cols__title}>Разделы</h3>
            <ul className={styles.list}>
              <li key='0'>
                <Link href={'https://www.ivi.ru/'} className={styles.list__link}>Мой Иви</Link>
              </li>
              <li key='1'>
                <Link href={'https://www.ivi.ru/new'} className={styles.list__link}>Что нового</Link>
              </li>
              <li key='2'>
                <Link href={'https://www.ivi.ru/movies'} className={styles.list__link}>Фильмы</Link>
              </li>
              <li key='3'>
                <Link href={'https://www.ivi.ru/series'} className={styles.list__link}>Сериалы</Link>
              </li>
              <li key='4'>
                <Link href={'https://www.ivi.ru/animation'} className={styles.list__link}>Мультфильмы</Link>
              </li>
              <li key='5'>
                <Link href={'https://www.ivi.ru/tvplus'} className={styles.list__link}>TV+</Link>
              </li>
              <li key='6'>
                <Link href={'https://www.ivi.ru/goodmovies'} className={styles.list__link}>Что посмотреть</Link>
              </li>
              <li className={styles.list__sert} key='7'>
                <Link href={'https://www.ivi.ru/cert'} className={styles.list__link}>Активация сертификата</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.cols}>
            <h3 className={styles.cols__title}>Служба поддержки</h3>
            <p>
              Мы всегда готовы вам помочь.<br />
              Наши операторы онлайн 24/7
            </p>
            <div className={styles.support}>
              <Link href={'https://www.ivi.ru/profile'}>
                <Button className={styles.support__chatbtn}>Написать в чате</Button>
              </Link>
              <div className={styles.support__btns}>
                <Link href={'mailto:support@ivi.ru'} type="email"><Button className={styles.support__iconBtn}><GoMail /></Button></Link>
                <Link href={'tel:+73832021280'} type='tel'><Button className={styles.support__iconBtn}><HiOutlinePhone /></Button></Link>
              </div>
              <Link href={'https://ask.ivi.ru/'} className={styles.ask}>ask.ivi.ru</Link>
              <p>Ответы на вопросы</p>
            </div>
          </div>
          <div className={styles.cols}>
            <Link href={'https://www.ivi.ru/subscribe?redirect_url=%2F'} className={styles.widget}>
              <div className={styles.widget__img}>
                <Image src={speakerphone} alt="speakerphone" priority></Image>
              </div>
              <p className={styles.widget__text}>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.columns}>
            <div className={styles.stories}>
              <Link href={'https://go.onelink.me/app/devicesiOS'} key='App Store'>
                <Button className={styles.stories__btn}>
                  <FaApple />
                  <div>
                    <span>Загрузить в</span>
                    <div>App Store</div>
                  </div>
                </Button>
              </Link>
              <Link href={'https://go.onelink.me/app/devicesAndroid'} key='Google Play'>
                <Button className={styles.stories__btn}>
                  <FaGooglePlay />
                  <div>
                    <span>Доступно в</span>
                    <div>Google Play</div>
                  </div>
                </Button>
              </Link>
              <Link href={'https://www.ivi.ru/pages/tvsmart/'} key='Smart TV'>
                <Button className={styles.stories__btn}>
                  <BsTvFill />
                  <div>
                    <span>Смотрите на</span>
                    <div>Smart TV</div>
                  </div>
                </Button>
              </Link>
              <Link href={'https://www.ivi.ru/devices'} key='all devices'>
                <Button className={styles.stories__btn}>
                  <MdDevicesOther />
                  <div>
                    <div>Все устройства</div>
                  </div>
                </Button>
              </Link>
            </div>
            <div className={styles.copyrights}>
              <p>© 2023 ООО «Иви.ру»</p>
              <p>HBO ® and related service marks are the property of Home Box Office, Inc</p>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.socials}>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};