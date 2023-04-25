import { FC } from "react";
import Link from "next/link";
import styles from './index.module.scss';
import { RiH2 } from "react-icons/ri";

type ContextSubProps = {
  children?: any;
  className?: string;
  title?: string
};

export const ContextSubMenu: FC<ContextSubProps> = ({ children, className, title }) => {
  return (
    <div className={[styles.submenu, className].join(' ')}>
      {title && <h2>{title}</h2>}
      <div className={styles.content}>
        <div>
          <h3>Жанры</h3>
          <ul>
            {[...new Array(19)].map((_, i) => (
              <li key={i}><Link href={'/'}>Боевики</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Страны</h3>
          <ul>
            {[...new Array(3)].map((_, i) => (
              <li key={i}><Link href={'/'}>Русские</Link></li>
            ))}
          </ul>
          <h3>Годы</h3>
          <ul>
            {[...new Array(4)].map((_, i) => (
              <li key={i}><Link href={'/'}>Фильмы 2023 года</Link></li>
            ))}
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
