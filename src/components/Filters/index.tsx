import { FC, useState } from 'react';
import styles from './index.module.scss'
import { TfiClose } from "react-icons/tfi";
import FilterItem from './FilterItem';

const Filters: FC = () => {
  const [isFilter, setIsFilter] = useState(false);
  const filters = ['Жанры', 'Страны', 'Годы', 'Рейтинг Иви'];

  return (
    <div className={styles.filters}>
      <div className={styles.filtersRow}>
        {filters.map((item, i) => <div key={i}><FilterItem item={item} /></div>)}
      </div>
      <button className={styles.filtersBtn} disabled={!isFilter}><TfiClose /> Сбросить фильтры</button>
    </div>
  );
};

export default Filters;