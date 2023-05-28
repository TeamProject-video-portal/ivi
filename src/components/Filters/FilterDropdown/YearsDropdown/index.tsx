import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import ListItem from "../ListItem";
import { BiCircle } from "react-icons/bi";
import { TbCircleDot } from "react-icons/tb";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useAppDispatch } from "@/hooks/hooks";
import { setYears } from "@/Redux/filter/actions";

const YearsDropdown: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.yearsDropdown}>
      <ul className={styles.content}>
        <div className={styles.allYear}>
          <div onClick={() => dispatch(setYears([1940, 2023]))}>{t("filters.all_year")}</div>
          <TbCircleDot />
        </div>
        <ListItem
          item={"2023 год"}
          key={0}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2023, 2023]))}
        />
        <ListItem
          item={"2022 год"}
          key={1}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2022, 2022]))}
        />
        <ListItem
          item={"2021 год"}
          key={2}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2021, 2021]))}
        />
        <ListItem
          item={"2020 год"}
          key={3}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2020, 2020]))}
        />
        <ListItem
          item={"2019 год"}
          key={4}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2019, 2019]))}
        />
        <ListItem
          item={"2018 год"}
          key={5}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2018, 2018]))}
        />
        <ListItem
          item={"2022-2023"}
          key={6}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2022, 2023]))}
        />
        <ListItem
          item={"2021-2022"}
          key={7}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2021, 2022]))}
        />
        <ListItem
          item={"2020-2022"}
          key={8}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2020, 2022]))}
        />
        <ListItem
          item={"2019-2020"}
          key={9}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2019, 2020]))}
        />
        <ListItem
          item={"2010-2020"}
          key={10}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2010, 2020]))}
        />
        <ListItem
          item={"2010-2015"}
          key={11}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2010, 2015]))}
        />
        <ListItem
          item={"2000-2010"}
          key={12}
          icon={BiCircle}
          onClick={() => dispatch(setYears([2000, 2010]))}
        />
        <ListItem
          item={"1990-2000"}
          key={13}
          icon={BiCircle}
          onClick={() => dispatch(setYears([1990, 2000]))}
        />
        <ListItem
          item={"1980-1990"}
          key={14}
          icon={BiCircle}
          onClick={() => dispatch(setYears([1980, 1990]))}
        />
        <ListItem
          item={"до 1980"}
          key={15}
          icon={BiCircle}
          onClick={() => dispatch(setYears([1940, 1980]))}
        />
      </ul>
    </div>
  );
};

export default YearsDropdown;
