import { FC } from 'react';
import styles from "./index.module.scss"
import FilmographyItem from './FilmographyItem'

const filmographyArray = [...new Array(15)];

const Filmography: FC = () => {

  return (
    <div className={styles.filmography}>
      <div className={styles.titleRow}>
        <h2 id="filmography" className={styles.title}>Полная фильмография</h2>
        <div className={styles.count}>47 фильмов</div>
      </div>
      <div className={styles.filmographyContent}>
        {filmographyArray.map((item, i) =>
          <FilmographyItem key={i} />
        )}
      </div>
    </div>
  );
};

export default Filmography;