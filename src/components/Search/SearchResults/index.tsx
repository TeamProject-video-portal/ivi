import { FC } from 'react';
import styles from './index.module.scss';
import { RiUser4Line } from 'react-icons/ri';

type SearchResultsProps = {
  className?: string;
  placeholder?: string
  results: Array<any>
}

const SearchResults: FC<SearchResultsProps> = ({ className, placeholder, results }) => {

  return (
    <ul className={[styles.searchResults, className].join(' ')}>
      {results.map((item, i) => (
        <li key={i} className={styles.list}>
          {/* <RiUser4Line className={styles.icon} /> */}
          <div className={`nbl-icon nbl-icon_person_20 ${styles.icon}`}></div>
          <div>
            <div className={styles.item}>{item}</div>
            <div className={styles.label}>{placeholder}</div>
          </div>
        </li>
      ))}
    </ul>)
};

export default SearchResults;