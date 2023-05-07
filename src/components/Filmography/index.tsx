import { FC } from 'react';
import styles from "./index.module.scss"
import FilmographyItem from './FilmographyItem'
import { ActorFilmsType, IPerson } from '@/types/types';

//const filmographyArray = [...new Array(10)];
type FilmographyProps = {
  person: IPerson;
}

const Filmography: FC<FilmographyProps> = ({ person }) => {
  const filmographyArray = person.films

  return (
    <div className={styles.filmography}>
      <div className={styles.titleRow}>
        <h2 id="filmography" className={styles.title}>Полная фильмография</h2>
        <div className={styles.count}>{person.films.length} фильмов</div>
      </div>
      <div className={styles.filmographyContent}>
        {filmographyArray.map((item, i) =>
          <FilmographyItem key={i} film={item} />
        )}
      </div>
    </div>
  );
};

export default Filmography;