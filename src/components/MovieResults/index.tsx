import { FC, useState, useEffect } from "react";
import styles from "./index.module.scss";
import Poster from "../Poster";
import { IMovie, SearchFilmsType } from "@/types/types";
import { Button } from "../Button/Button";

const filterResultArray = [...new Array(60)];
const SHOW_SIZE = 14;

type Props = {
  movies: SearchFilmsType[] | any;
};

const MovieResults: FC<Props> = ({ movies }) => {
  let resultArray = [...movies.slice(0, SHOW_SIZE)];
  const [itemsToShow, setItemsToShow] = useState(resultArray);
  const [next, setNext] = useState(SHOW_SIZE);

  const sliceArray = (start: number, end: number): void => {
    resultArray = [...resultArray, ...movies.slice(start, end)];
    setItemsToShow(resultArray);
  };

  const clickHandler = () => {
    sliceArray(next, next + SHOW_SIZE);
    setNext(next + SHOW_SIZE);
  };
  console.log(itemsToShow);
  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {itemsToShow.map((item, i) => (
          <Poster key={i} film={item} />
        ))}
      </div>
      <Button className={styles.results__moreBtn} onClick={clickHandler}>
        Показать еще
      </Button>
    </div>
  );
};

export default MovieResults;
