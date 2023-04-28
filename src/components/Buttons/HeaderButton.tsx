import { FC, MouseEventHandler, ReactNode, useState } from "react";
import styles from "./index.module.scss";
import { AiOutlineBell } from "react-icons/ai";
import { MdSearch } from "react-icons/md";
import { useRouter } from "next/router";
import { en } from "@/locales/en";
import { ru } from "@/locales/ru";
export type HeaderButtonProps = {
  children?: ReactNode | ReactNode[];
  type?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const HeaderButton: FC<HeaderButtonProps> = ({
  children,
  type,
  onClick,
}) => {
  let cssClass = "";
  let content;

  switch (type) {
    case "lang":
      cssClass = "button_lang";
      content = children;
      break;
    case "notification":
      cssClass = "button_notification";
      content = <AiOutlineBell />;
      break;
    // case "search":
    //   cssClass = "button_search";
    //   content = <MdSearch />;
    //   break;
    default:
      console.log("no button");
  }

  return (
    <button className={styles[cssClass]} onClick={onClick}>
      {content}
    </button>
  );
};
