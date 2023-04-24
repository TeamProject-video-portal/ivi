import { FC } from "react";
import Link from "next/link";

export const DropDownMenuSerial: FC = () => {
  return (
    <ul>
      <li key='Новинки'>
        <Link href={'https://www.ivi.ru/new/series-new'}>Новинки</Link>
      </li>
      <li key='Иви.Рейтинг'>
        <Link href={'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'}>Иви.Рейтинг</Link>
      </li>
      <li key='Сериалы в HD'>
        <Link href={'https://www.ivi.ru/collections/series-hd'}>Сериалы в HD</Link>
      </li>
      <li key='Бесплатные сериалы'>
        <Link href={'https://www.ivi.ru/collections/tvshow-free?sort=new'}>Бесплатные сериалы</Link>
      </li>
      <li key='Сериалы Amediateka'>
        <Link href={'https://www.ivi.ru/collections/serialyi-amediateka'}>Сериалы Amediateka</Link>
      </li>
      <li key='Сериалы Paramount PlayЧто посмотреть'>
        <Link href={'https://www.ivi.ru/collections/series-paramount-play'}>Сериалы Paramount Play</Link>
      </li>
    </ul>
  );
};