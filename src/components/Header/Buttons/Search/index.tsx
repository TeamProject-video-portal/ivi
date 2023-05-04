import { FC } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import { useRouter } from "next/router";
import { useTranslation } from "next-export-i18n";

const SearchButton: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.button_search}>
      <div className={`nbl-icon nbl-icon_search_16 ${styles.icon}`}></div>
      <p>{t("buttons.search")}</p>
    </div>
  );
};

export default SearchButton;
