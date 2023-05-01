import { FC, useState } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { AiOutlineBell } from "react-icons/ai";
import { useRouter } from "next/router";
import { HeaderButton } from "@/components/Buttons/HeaderButton";
import { useTranslation } from "next-i18next";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
type Props = {};

const LanguageButton: FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { t } = useTranslation();
  const [isRus, SetIsRus] = useState(true);
  const [text, SetText] = useState("EN");

  return (
    <div>
      {/* <HeaderButton type={"lang"} onClick={() => handleClick()}>
        {isRus ? "RU" : "EN"}
      </HeaderButton> */}
    </div>
  );
};

export default LanguageButton;
