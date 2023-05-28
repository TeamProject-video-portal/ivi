import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import ListItem from "../ListItem";
import { BiCircle } from "react-icons/bi";
import { TbCircleDot } from "react-icons/tb";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { years } from "@/data/filters";

const YearsDropdown: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.yearsDropdown}>
      <ul className={styles.content}>
        <div className={styles.allYear}>
          <Link href={"/"}>{t("filters.all_year")}</Link>
          <TbCircleDot />
        </div>
        {years.map((item, i) => (
          <ListItem item={item} key={i} icon={BiCircle} />
        ))}
      </ul>
    </div>
  );
};

export default YearsDropdown;
