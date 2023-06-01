import { FC } from "react";
import styles from "./index.module.scss";
import { useAppSelector } from "@/hooks/hooks";
import { selectFilters } from "@/Redux/filter/selectors";

const FiltersTitleRow: FC = () => {
  const filters = useAppSelector(selectFilters);

  const createRow = (): string => {
    let row = "";
    if (filters.genres.length) {
      row += filters.genres.join(", ");
    } else {
      row += "Все жанры ";
    }
    if (filters.countries.length) {
      row += " / " + filters.countries.join(", ");
    } else {
      row += "/ Все страны ";
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

    if (filters.directors.length) {
      row += " / " + filters.directors.join(", ");
    }

    if (filters.actors.length) {
      row += " / ";
      row += filters.actors.join(", ");
    }

    return row;
  };

  const row = createRow();

  return <div className={styles.filtersTitleRow}>{row}</div>;
};

export default FiltersTitleRow;
