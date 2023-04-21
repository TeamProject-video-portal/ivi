import { FC } from "react";
import styles from './Socials.module.scss';
import Link from "next/link";
import { Button } from "../Button/Button";
import { FaLinkedinIn, FaOdnoklassniki, FaTelegramPlane, FaTwitter, FaVk } from 'react-icons/fa';
import { MdWifiCalling3 } from 'react-icons/md';

type SocialsProps = {
  className?: string;
};

export const Socials: FC<SocialsProps> = ({ className }) => {
  return (
    <div className={[styles.socials, className].join(' ')}>
      <Link href={'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e'}>
        <Button className={styles.buttons}>
          <FaVk />
        </Button>
      </Link>
      <Link href={'https://ok.ru/ivi.ru'}>
        <Button className={styles.buttons}>
          <FaOdnoklassniki />
        </Button>
      </Link>
      <Link href={'https://twitter.com/ivi_ru'}>
        <Button className={styles.buttons}>
          <FaTwitter />
        </Button>
      </Link>
      <Link href={'https://invite.viber.com/?g2=AQAN5HwJ109AW0tMEtqcQ1MwRvpATF2umOpstVEvZ4phfQicwxYucW5izsa0J5qi&lang=ru'}>
        <Button className={styles.buttons}>
          <MdWifiCalling3 />
        </Button>
      </Link>
      <Link href={'https://www.linkedin.com/company/2543415/'}>
        <Button className={styles.buttons}>
          <FaLinkedinIn />
        </Button>
      </Link>
      <Link href={'https://t.me/official_iviru'}>
        <Button className={styles.buttons}>
          <FaTelegramPlane />
        </Button>
      </Link>
    </div>
  );
};