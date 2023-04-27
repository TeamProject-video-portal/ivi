import { FC } from 'react';
import styles from './index.module.scss';
import ListItem from '../ListItem';
import { BsCheckLg } from "react-icons/bs";

const genres = [
  'Для детей',
  'Зарубежные',
  'Приключения',
  'Фантастика',
  'Драмы',
  'Для детей',
  'Зарубежные',
  'Приключения',
  'Фантастика',
  'Драмы',
  'Для детей',
  'Зарубежные',
  'Приключения',
  'Фантастика',
  'Драмы',
  'Для детей',
  'Зарубежные',
  'Приключения',
  'Фантастика',
  'Драмы',
  'Для детей',
  'Зарубежные',
  'Приключения',
];

const GenresDropdown: FC = () => {
  return (
    <div className={styles.genresDropdown}>
      <div className={styles.sliderRow}></div>
      <ul className={styles.content}>
        {genres.map((item, i) => <ListItem href='/' item={item} key={i} icon={BsCheckLg} />)}
      </ul>
    </div>
  );
};

export default GenresDropdown;
