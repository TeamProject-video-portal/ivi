import { FC } from 'react';
import styles from "./index.module.scss"
import FilmographyItem from './FilmographyItem'
import { ActorFilmsType, IPerson } from '@/types/types';
import { useLanguageQuery, useTranslation } from "next-export-i18n";

// type FilmographyProps = {
//   person: IPerson;
// }

// const Filmography: FC<FilmographyProps> = ({ person}) => {
const Filmography: FC = () => {
  const { t } = useTranslation();
  //const filmographyArray = person.films
  const filmographyArray = [...new Array(10)];

  return (
    <div className={styles.filmography}>
      <div className={styles.titleRow}>
        <h2 id="filmography" className={styles.title}>{t('person.filmography')}</h2>
        {/* <div className={styles.count}>{person.films.length} {t('person.count_movies')}</div> */}
        <div className={styles.count}>47 {t('person.count_movies')}</div>
      </div>
      <div className={styles.filmographyContent}>
        {filmographyArray.map((item, i) =>
          // <FilmographyItem key={i} film={item} />
          <FilmographyItem key={i} />
        )}
      </div>
    </div>
  );
};

export default Filmography;