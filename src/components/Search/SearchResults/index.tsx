import { FC } from "react";
import styles from "./index.module.scss";
import { RiUser4Line } from "react-icons/ri";
import { IPerson } from "@/types/types";

type SearchResultsProps = {
  className?: string;
  placeholder?: string;
  results: IPerson[];
};

const SearchResults: FC<SearchResultsProps> = ({ className, placeholder, results }) => {
  return (
    <ul className={[styles.searchResults, className].join(" ")}>
      {results.map((item, i) => (
        <li key={i} className={styles.list}>
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
