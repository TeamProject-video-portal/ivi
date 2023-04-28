import { FC } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import { useRouter } from "next/router";
import { en } from "@/locales/en";
import { ru } from "@/locales/ru";
import { HeaderButton } from "@/components/Buttons/HeaderButton";

const SearchButton: FC = () => {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

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
      <span>{t.buttons.search}</span>

      {/* <HeaderButton type={"search"}></HeaderButton> */}
    </div>
  );
};

export default SearchButton;
