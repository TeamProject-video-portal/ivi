import { FC, useState, useEffect } from "react";
import styles from "./index.module.scss";
import Poster from "../Poster";
import Link from "next/link";
import { IMovie, ISimpleMovie } from "@/types/types";
import { Button } from "../Button/Button";

const SHOW_SIZE = 14;

type Props = {
  movies: IMovie[];
};

const MovieResults: FC<Props> = ({ movies }) => {
  const [itemsToShow, setItemsToShow] = useState<IMovie[]>([]);

  useEffect(() => {
    setItemsToShow([...movies.slice(0, SHOW_SIZE)]);
  }, [movies]);

  const [next, setNext] = useState(SHOW_SIZE);

  const sliceArray = (start: number, end: number): void => {
    setItemsToShow((state) => [...state, ...movies.slice(start, end)]);
  };

  const clickHandler = () => {
    sliceArray(next, next + SHOW_SIZE);
    setNext(next + SHOW_SIZE);
    console.log("itemsToShow1", itemsToShow);
  };

  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {itemsToShow.map((item, i) => (
          <Link href={`/film/${item.id}`} key={`${item.id}`}>
            <Poster film={item} />
          </Link>
        ))}
      </div>
      <Button className={styles.results__moreBtn} onClick={clickHandler}>
        Показать еще
      </Button>
    </div>
  );
};

export default MovieResults;
