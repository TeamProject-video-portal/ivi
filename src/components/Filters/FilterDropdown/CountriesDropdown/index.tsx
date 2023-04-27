import { FC } from 'react';
import styles from "./index.module.scss"
import ListItem from '../ListItem';
import { BsCheckLg } from "react-icons/bs";

const countries = [
  'Бразилия',
  'Великобритания',
  'Венгрия',
  'Германия',
  'Гонконг',
  'Дания',
  'Индия',
  'Ирландия',
  'Испания',
  'Италия',
  'Казахстан',
  'Канада',
  'Китай',
  'Колумбия',
  'Мексика',
  'Нидерланды',
  'Новая Зеландия',
  'Норвегия',
  'Польша',
  'Россия',
  'СССР',
  'США',
  'Таиланд',
  'Турция',
  'Финляндия',
  'Франция',
  'Швейцария',
  'Швеция',
  'ЮАР',
  'Южная Корея'
];

const CountriesDropdown: FC = () => {
  return (
    <div className={styles.countriesDropdown}>
      <div className={styles.sliderRow}></div>
      <ul className={styles.content}>
        {countries.map((item, i) => <ListItem href='/' item={item} key={i} icon={BsCheckLg} />)}
      </ul>
    </div>
  );
};

export default CountriesDropdown;