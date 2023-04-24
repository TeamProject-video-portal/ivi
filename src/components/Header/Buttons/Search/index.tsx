import { FC } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";

const SearchButton: FC = () => {
  return (
    <div className={styles.button_search}>
      <IconContext.Provider
        value={{
          className: `${styles.search_icon}`,
        }}
      >
        <div>
          <MdSearch />
        </div>
      </IconContext.Provider>
      <span>Поиск</span>
    </div>
  );
};

export default SearchButton;
