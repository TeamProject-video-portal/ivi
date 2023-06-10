import { FC, useState, useEffect } from "react";
import styles from "./index.module.scss";
import Poster from "../Poster";
import Link from "next/link";
import { IMovie, ISimpleMovie } from "@/types/types";
import { Button } from "../Button/Button";
import { useAppSelector } from "@/hooks/hooks";
import { selectFilters } from "@/Redux/filter/selectors";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";

const SHOW_SIZE = 14;

const MovieResults: FC = () => {
  const { t } = useTranslation();
  const { results } = useAppSelector(selectFilters);
  const [itemsToShow, setItemsToShow] = useState<IMovie[]>([]);
  const [next, setNext] = useState(0);

  useEffect(() => {
    setItemsToShow([...results.slice(0, SHOW_SIZE)]);
    setNext(SHOW_SIZE);
  }, [results]);

  //console.log("itemsToShow.length, results.length, next", itemsToShow.length, results.length, next);

  const sliceArray = (start: number, end: number): void => {
    setItemsToShow((state) => [...state, ...results.slice(start, end)]);
  };

  const clickHandler = () => {
    sliceArray(next, next + SHOW_SIZE);
    setNext((state) => (state < results.length ? state + SHOW_SIZE : state));
  };

  const router = useRouter();
  const [locale, setLocale] = useState<any>("ru");

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {itemsToShow.map((item, i) => (
          <Link href={`/film/${item.id}?lang=${locale}`} key={`${item.id}`}>
            <Poster film={item} />
          </Link>
        ))}
      </div>
      <Button
        className={`${styles.results__moreBtn} ${
          itemsToShow.length >= results.length && styles.results__moreBtn_none
        }`}
        onClick={clickHandler}
      >
        {t("buttons.show_more")}
      </Button>
    </div>
  );
};

export default MovieResults;
