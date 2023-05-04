import { FC } from 'react';
import styles from "./index.module.scss"
import Poster from '../Poster';
import { Button } from '../Button/Button';

const MovieResults: FC = () => {
  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {[...new Array(50)].map((_, i) =>
          <Poster />
        )}
      </div>
      <Button className={styles.results__moreBtn}>Показать еще</Button>
    </div>
  );
};

export default MovieResults;