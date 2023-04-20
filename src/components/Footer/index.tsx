import { FC } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss"

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <nav>
        <ul>
          <h3>О нас</h3>
          <li>
            <Link href={'https://corp.ivi.ru/'}> О компании</Link>
          </li>
          <li>
            <Link href={'https://corp.ivi.ru/career/#career-vacancy-block'}>Вакансии</Link>
          </li>
          <li>
            <Link href={'https://www.ivi.ru/pages/beta/'}>Программа бета-тестирования</Link>
          </li>
          <li>
            <Link href={'https://www.ivi.ru/info/partners'}>Информация для партнёров</Link>
          </li>
          <li>
            <Link href={'https://corp.ivi.ru/advertisers/'}>Размещение рекламы</Link>
          </li>
          <li>
            <Link href={'https://www.ivi.ru/info/agreement'}>Пользовательское соглашение</Link>
          </li>
          <li>
            <Link href={'https://www.ivi.ru/info/confidential'}>
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'}>Комплаенс</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};