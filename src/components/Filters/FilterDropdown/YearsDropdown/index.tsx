import { FC, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import ListItem from "../ListItem";
import { BiCircle } from "react-icons/bi";
import { TbCircleDot } from "react-icons/tb";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setYears } from "@/Redux/filter/actions";
import { FilterRangeType } from "@/types/types";
import { selectFilters } from "@/Redux/filter/selectors";

const YearsDropdown: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { yearsMin, yearsMax } = useAppSelector(selectFilters);

  type yearsFilterType = {
    years: string;
    range: FilterRangeType;
  };

  const yearsFilter: yearsFilterType[] = [
    { years: "2023 год", range: [2023, 2023] },
    { years: "2022 год", range: [2022, 2022] },
    { years: "2021 год", range: [2021, 2021] },
    { years: "2020 год", range: [2020, 2020] },
    { years: "2019 год", range: [2019, 2019] },
    { years: "2018 год", range: [2018, 2018] },
    { years: "2022-2023", range: [2022, 2023] },
    { years: "2021-2022", range: [2021, 2022] },
    { years: "2020-2022", range: [2020, 2022] },
    { years: "2019-2020", range: [2019, 2020] },
    { years: "2010-2020", range: [2010, 2020] },
    { years: "2000-2010", range: [2000, 2010] },
    { years: "1990-2000", range: [1990, 2000] },
    { years: "1980-1990", range: [1980, 1990] },
    { years: "до 1980", range: [1940, 1980] },
  ];

  const findFilter = yearsFilter.find(
    (item) => item.range[0] === yearsMin && item.range[1] === yearsMax,
  );

  const onClickHandler = (range: [number, number]) => {
    dispatch(setYears(range));
  };

  return (
    <div className={styles.yearsDropdown}>
      <ul className={styles.content}>
        <ListItem
          item={"Все годы"}
          key={100}
          icon={TbCircleDot}
          onClick={() => onClickHandler([1940, 2023])}
          activeFilter={!findFilter}
        />
        {yearsFilter.map((item, index) => (
          <ListItem
            item={item.years}
            key={index}
            icon={BiCircle}
            onClick={() => onClickHandler(item.range)}
            activeFilter={findFilter && item.years === findFilter.years}
          />
        ))}
      </ul>
    </div>
  );
};

export default YearsDropdown;
