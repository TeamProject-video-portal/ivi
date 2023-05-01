import { FC, useState } from 'react';
import styles from './index.module.scss'
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

type SortType = 'SCORE' | 'RATING' | 'DATE' | 'TITLE';

const SortList = {
  'SCORE': 'по количеству оценок',
  'RATING': 'по рейтингу',
  'DATE': 'по дате выхода',
  'TITLE': 'по алфавиту',
}

const Sort: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState<SortType>('RATING');

  const onClickSort = (value: SortType) => {
    setSort(value);
    setIsOpen(false);
  }

  return (
    <div className={styles.sort}>
      <div className={styles.sort__row} onClick={() => setIsOpen((state => !state))}>
        <div className={`nbl-icon ${styles.icon}`}></div>
        <div className={styles.choice}>{SortList[sort] || SortList.RATING}</div>
        <div className={styles.icon_arrow}>{isOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}</div>
      </div>
      {isOpen && sort && (
        <div className={styles.sort__popup}>
          <div className={styles.label}>Сортировать</div>
          <div className={styles.sortItem} onClick={(e) => onClickSort('SCORE')}>
            <div className={sort == 'SCORE' ? styles.borderActive : ''}></div>
            {SortList['SCORE']}
          </div>
          <div className={styles.sortItem} onClick={(e) => onClickSort('RATING')}>
            <div className={sort == 'RATING' ? styles.borderActive : ''}></div>
            {SortList['RATING']}
          </div>
          <div className={styles.sortItem} onClick={(e) => onClickSort('DATE')}>
            <div className={sort == 'DATE' ? styles.borderActive : ''}></div>
            {SortList['DATE']}
          </div>
          <div className={styles.sortItem} onClick={(e) => onClickSort('TITLE')}>
            <div className={sort == 'TITLE' ? styles.borderActive : ''}></div>
            {SortList['TITLE']}
          </div >
        </div >
      )}

    </div >
  );
};

export default Sort;