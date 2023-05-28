import { FC, useState, Dispatch, SetStateAction } from "react";
import styles from "./index.module.scss";
import { TfiClose } from "react-icons/tfi";
import FilterItem from "./FilterItem";
import RangeRating from "../RangeRating";
import RangeScore from "../RangeScore";
import { filtersTitle } from "@/data/filters";
import { IoFilter } from "react-icons/io5";
import { FiltersState } from "@/data/filters";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useAppDispatch } from "@/hooks/hooks";
import { resetFilters } from "@/Redux/filter/actions";

type FiltersProps = {
  filtersChoice: FiltersState;
  isFilter: boolean;
};

const Filters: FC<FiltersProps> = ({ filtersChoice, isFilter }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState("");
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      <div className={styles.filtersRow}>
        {filtersTitle.map((item) => (
          <div key={item.title}>
            <FilterItem item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        ))}
      </div>
      <div className={styles.rangeRow}>
        <RangeRating
          rtl={false}
          ratingMin={filtersChoice.ratingMin}
          ratingMax={filtersChoice.ratingMax}
        />
        <RangeScore
          rtl={false}
          scoreMin={filtersChoice.scoreMin}
          scoreMax={filtersChoice.scoreMax}
        />
      </div>
      <button
        className={`${styles.filtersBtn} ${isFilter && styles.filtersBtn_active}`}
        disabled={!isFilter}
        onClick={() => dispatch(resetFilters())}
      >
        <TfiClose />
        {t("filters.reset_filters")}
      </button>
    </div>
  );
};

export default Filters;
