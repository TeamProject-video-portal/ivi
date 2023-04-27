import { FC, useState } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { AiOutlineBell } from "react-icons/ai";
import { useRouter } from "next/router";

const LanguageButton: FC = () => {
  const router = useRouter();
  const [isRus, SetIsRus] = useState(true);
  const handleClick = () => {
    SetIsRus(!isRus);
    isRus
      ? router.push(`${router.route}`, `${router.route}`, { locale: "ru" })
      : router.push(`${router.route}`, `${router.route}`, { locale: "en" });
  };
  return (
    <div className={styles.button_lang}>
      <button className={styles.text} onClick={() => handleClick()}>
        {isRus ? "RU" : "EN"}
      </button>
    </div>
  );
};

export default LanguageButton;
