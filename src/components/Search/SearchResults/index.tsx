import { FC } from "react";
import styles from "./index.module.scss";
import { RiUser4Line } from "react-icons/ri";
import { IPerson } from "@/types/types";
import { useAppDispatch } from "@/hooks/hooks";
import { setActorsFilter, setDirectorsFilter } from "@/Redux/filter/actions";

type SearchResultsProps = {
  className?: string;
  placeholder?: string;
  results: IPerson[];
  type: string;
};

const SearchResults: FC<SearchResultsProps> = ({
  className,
  placeholder,
  results,
  type,
}) => {
  const dispatch = useAppDispatch();

  const onClickHandler = (item: string) => {
    if (type === "actors") {
      dispatch(setActorsFilter(item));
    } else {
      dispatch(setDirectorsFilter(item));
    }
  };

  return (
    <ul className={[styles.searchResults, className].join(" ")}>
      {results.map((item, i) => (
        <li
          key={i}
          className={styles.list}
          onClick={() => onClickHandler(item.personLang[0].personName)}
        >
          <div className={`nbl-icon nbl-icon_person_20 ${styles.icon}`}></div>
          <div>
            <div className={styles.item}>{item.personLang[0].personName}</div>
            <div className={styles.label}>{placeholder}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
