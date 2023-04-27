import { FC, useState } from 'react';
import styles from './index.module.scss'
import { TfiClose } from "react-icons/tfi";
import FilterItem from './FilterItem';

const Filters: FC = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [isOpen, setIsOpen] = useState('');
  const filters = [
    { title: 'genres', value: 'Жанры' },
    { title: 'countries', value: 'Страны' },
    { title: 'years', value: 'Годы' },
    { title: 'producers', value: 'Режиссёры' },
    { title: 'actors', value: 'Актёры' }
  ];

  return (
    <div className={styles.filters}>
      <div className={styles.filtersRow}>
        {filters.map((item) =>
          <div key={item.title}><FilterItem item={item} isOpen={isOpen} setIsOpen={setIsOpen} /></div>)
        }
      </div>
      <button className={styles.filtersBtn} disabled={!isFilter}><TfiClose /> Сбросить фильтры</button>
    </div>
  );
};

export default Filters;