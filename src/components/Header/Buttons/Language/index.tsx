import { FC, useState } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { AiOutlineBell } from "react-icons/ai";
import { useRouter } from "next/router";
import { HeaderButton } from "@/components/Buttons/HeaderButton";

const LanguageButton: FC = () => {
  const router = useRouter();
  const [isRus, SetIsRus] = useState(true);
  const [text, SetText] = useState("EN");
  const handleClick = () => {
    SetIsRus(!isRus);

    isRus
      ? router.push(`${router.route}`, `${router.route}`, { locale: "ru" })
      : router.push(`${router.route}`, `${router.route}`, { locale: "en" });
  };
  return (
    <HeaderButton type={"lang"} onClick={() => handleClick()}>
      {isRus ? "RU" : "EN"}
    </HeaderButton>
  );
};

export default LanguageButton;
