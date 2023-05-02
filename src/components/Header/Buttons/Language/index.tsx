import { FC, useState } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { AiOutlineBell } from "react-icons/ai";
import { useRouter } from "next/router";
import { HeaderButton } from "@/components/Buttons/HeaderButton";
import { useTranslation } from "react-i18next";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
type Props = {};

const LanguageButton: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [isRus, SetIsRus] = useState(true);
  const [text, SetText] = useState("EN");

  const handleClick = () => {
    isRus ? SetText("RU") : SetText("EN");
    SetIsRus(!isRus);
    router.push(router.pathname, router.asPath, { locale: text.toLowerCase() });
  };
  return (
    <div>
      <button onClick={() => handleClick()} className={styles.button_lang}>
        <p className={styles.text}> {isRus ? "RU" : "EN"}</p>
      </button>
    </div>
  );
};

export default LanguageButton;
