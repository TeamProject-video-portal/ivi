import { FC, useState, Dispatch, SetStateAction, useEffect } from "react";
import styles from "./index.module.scss";
import { TfiClose } from "react-icons/tfi";
import FilterItem from "./FilterItem";
import RangeRating from "../RangeRating";
import RangeScore from "../RangeScore";
import { IoFilter } from "react-icons/io5";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { resetFilters } from "@/Redux/filter/actions";
import { selectFilters } from "@/Redux/filter/selectors";
import { filtersTitle } from "@/data/filters";

const Filters: FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState("");

  const dispatch = useAppDispatch();
  const { ratingMin, ratingMax, scoreMin, scoreMax, isFilter } = useAppSelector(selectFilters);

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
        <RangeRating rtl={false} ratingMin={ratingMin} ratingMax={ratingMax} />
        <RangeScore rtl={false} scoreMin={scoreMin} scoreMax={scoreMax} />
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
