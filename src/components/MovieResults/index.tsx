import { FC, useState, useEffect } from 'react';
import styles from "./index.module.scss"
import Poster from '../Poster';
import { Button } from '../Button/Button';

const filterResultArray = [...new Array(60)];
const SHOW_SIZE = 14;
let resultArray = [...filterResultArray.slice(0, SHOW_SIZE)];;

const MovieResults: FC = () => {
  const [itemsToShow, setItemsToShow] = useState(resultArray);
  const [next, setNext] = useState(SHOW_SIZE);

  const sliceArray = (start: number, end: number): void => {
    resultArray = [...resultArray, ...filterResultArray.slice(start, end)];
    setItemsToShow(resultArray);
  };

  const clickHandler = () => {
    sliceArray(next, next + SHOW_SIZE);
    setNext(next + SHOW_SIZE);
  };

  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {itemsToShow.map((item, i) =>
          <Poster key={i} />
        )}
      </div>
      <Button className={styles.results__moreBtn} onClick={clickHandler}>Показать еще</Button>
    </div>
  );
};

export default MovieResults;