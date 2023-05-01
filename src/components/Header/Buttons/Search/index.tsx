import { FC } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import { useRouter } from "next/router";

const SearchButton: FC = () => {
  const router = useRouter();

  return (
    <div className={styles.button_search}>
      <div className={`nbl-icon nbl-icon_search_16 ${styles.icon}`}></div>
      <p>Поиск</p>
    </div>
  );
};

export default SearchButton;
