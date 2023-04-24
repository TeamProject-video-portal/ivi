import { FC } from "react";
import Link from "next/link";

export const DropDownMenuFilm: FC = () => {
  return (
    <ul>
      <li key='Новинки'>
        <Link href={'https://www.ivi.ru/new/movie-new'}>Новинки</Link>
      </li>
      <li key='Подборки'>
        <Link href={'https://www.ivi.ru/collections'}>Подборки</Link>
      </li>
      <li key='Иви.Рейтинг'>
        <Link href={'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'}>Иви.Рейтинг</Link>
      </li>
      <li key='Скоро на Иви'>
        <Link href={'https://www.ivi.ru/new/soon-ivi'}>Скоро на Иви</Link>
      </li>
      <li key='Трейлеры'>
        <Link href={'https://www.ivi.ru/trailers'}>Трейлеры</Link>
      </li>
      <li key='Что посмотреть'>
        <Link href={'https://www.ivi.ru/goodmovies'}>Что посмотреть</Link>
      </li>
      <li key='Фильмы в HD'>
        <Link href={'https://www.ivi.ru/collections/movies-hd'}>Фильмы в HD</Link>
      </li>
      <li key='Выбор Иви'>
        <Link href={'https://www.ivi.ru/collections/vyibor-ivi'}>Выбор Иви</Link>
      </li>
      <li key='Новинки подписки'>
        <Link href={'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection'}>Новинки подписки</Link>
      </li>
      <li key='Фильмы Amediateka'>
        <Link href={'https://www.ivi.ru/collections/filmyi-amediateka'}>Фильмы Amediateka</Link>
      </li>
      <li key='Популярные фильмы'>
        <Link href={'https://www.ivi.ru/collections/best-movies'}>Популярные фильмы</Link>
      </li>
      <li key='Фильмы Иви'>
        <Link href={'https://www.ivi.ru/collections/ivi-originals'}>Фильмы Иви</Link>
      </li>
    </ul>
  );
};