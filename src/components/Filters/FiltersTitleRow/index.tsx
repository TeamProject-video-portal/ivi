import { FC } from "react";
import styles from "./index.module.scss";
import { FiltersState } from "@/data/filters";
import { useAppSelector } from "@/hooks/hooks";
import { selectFilters } from "@/Redux/filter/selectors";

type FiltersTitleRowProps = {
  filtersChoice: FiltersState;
};

const FiltersTitleRow: FC<FiltersTitleRowProps> = ({ filtersChoice }) => {
  const filters = useAppSelector(selectFilters);

  const createRow = (): string => {
    let row = "";
    if (filters.genres.length) {
      row += filters.genres.join(", ");
    } else {
      row += "Все жанры, ";
    }
    row += " / ";
    if (filters.countries.length) {
      row += filters.countries.join(", ");
    } else {
      row += "Все страны ";
    }
    row += ` / ${filters.yearsMin} год`;

    if (filters.yearsMin !== filters.yearsMax) {
      row += ` - ${filters.yearsMax} год`;
    }

    row += ` / Рейтинг: от ${filters.ratingMin} до ${filters.ratingMax}`;
    row += ` / Количество оценок: от ${filters.scoreMin}`;
    if (filters.scoreMax < 200000) {
      row += ` до ${filters.scoreMax}`;
    }
    return row;
  };

  const row = createRow();

  return <div className={styles.filtersTitleRow}>{row}</div>;
};

export default FiltersTitleRow;
