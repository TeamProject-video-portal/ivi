import { FC } from 'react';
import styles from './index.module.scss';
import ListItem from '../ListItem';
import { BsCheckLg } from "react-icons/bs";
import GenresSlider from '../../GenresSlider';

export const Genres = [
  { title: 'Комедии', icon: '' },
  { title: 'Мультфильмы', icon: '' },
  { title: 'Ужасы', icon: '' },
  { title: 'Фантастика', icon: '' },
  { title: 'Триллеры', icon: '' },
  { title: 'Боевики', icon: '' },
  { title: 'Мелодрамы', icon: '' },
  { title: 'Детективы', icon: '' },
  { title: 'Приключения', icon: '' },
  { title: 'Фэнтези', icon: '' },
  { title: 'Военные', icon: '' },
  { title: 'Семейные', icon: '' },
  { title: 'Аниме', icon: '' },
  { title: 'Исторические', icon: '' },
  { title: 'Драмы', icon: '' },
  { title: 'Документальные', icon: '' },
  { title: 'Детские', icon: '' },
  { title: 'Криминал', icon: '' },
  { title: 'Биографии', icon: '' },
  { title: 'Вестерны', icon: '' },
  { title: 'Фильмы-нуар', icon: '' },
  { title: 'Спортивные', icon: '' },
  { title: 'Реальное ТВ', icon: '' },
  { title: 'Короткометражки', icon: '' },
  { title: 'Музыкальные', icon: '' },
  { title: 'Мюзиклы', icon: '' },
  { title: 'Ток-шоу', icon: '' },
  { title: 'Игры', icon: '' },
];

const GenresDropdown: FC = () => {
  return (
    <div className={styles.genresDropdown}>
      <div className={styles.sliderRow}>
        <GenresSlider />
      </div>
      <ul className={styles.content}>
        {Genres.map((item, i) => <ListItem href='/' item={item.title} key={i} icon={BsCheckLg} />)}
      </ul>
    </div>
  );
};

export default GenresDropdown;
