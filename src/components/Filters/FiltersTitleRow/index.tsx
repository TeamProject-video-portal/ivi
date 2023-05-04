import { FC } from 'react';
import styles from "./index.module.scss"
import { FiltersState } from '@/data/filters';

type FiltersTitleRowProps = {
  filtersChoice: FiltersState;
}

const FiltersTitleRow: FC<FiltersTitleRowProps> = ({ filtersChoice }) => {

  const createRow = (): string => {
    let row = '';
    if (filtersChoice.genres[0] !== '') {
      row += filtersChoice.genres.join(', ')
    } else {
      row += 'Все жанры, '
    }
    row += ' / ';
    if (filtersChoice.countries[0] !== '') {
      row += filtersChoice.countries.join(', ')
    } else {
      row += 'Все страны '
    }
    row += ' / ';
    if (filtersChoice.years[0] !== 0) {
      row += filtersChoice.years.join(', ')
    } else {
      row += 'Все годы '
    }
    row += ` / Рейтинг: от ${filtersChoice.ratingMin} до ${filtersChoice.ratingMax}`;
    row += ` / Количество оценок: от ${filtersChoice.scoreMin}`;
    if (filtersChoice.scoreMax < 200000) {
      row += ` до ${filtersChoice.scoreMax}`
    }
    return row;
  }

  const row = createRow();

  return (
    <div className={styles.filtersTitleRow}>
      {row}
    </div>
  );
};

export default FiltersTitleRow;