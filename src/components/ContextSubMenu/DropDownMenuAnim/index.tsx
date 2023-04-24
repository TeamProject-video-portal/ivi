import { FC } from "react";
import Link from "next/link";

export const DropDownMenuAnim: FC = () => {
  return (
    <ul>
      <li key='Новинки'>
        <Link href={'https://www.ivi.ru/new/animation-new'}>Новинки</Link>
      </li>
      <li key='Мультики в HD'>
        <Link href={'https://www.ivi.ru/collections/cartoons-hd'}>Мультики в HD</Link>
      </li>
      <li key='Мультфильмы Paramount Play'>
        <Link href={'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'}>Мультфильмы Paramount Play /<br />Nickelodeon</Link>
      </li>
      <li key='Мультфильмы Dreamworks'>
        <Link href={'hhttps://www.ivi.ru/collections/dreamworks-cartoons'}>Мультфильмы Dreamworks</Link>
      </li>
      <li key='Мультфильмы СТС Kids'>
        <Link href={'https://www.ivi.ru/collections/ctc-kids'}>Мультфильмы СТС Kids</Link>
      </li>
    </ul>
  );
};