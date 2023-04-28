import { FC } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { AiOutlineBell } from "react-icons/ai";
import { HeaderButton } from "@/components/Buttons/HeaderButton";

const NotificationButton: FC = () => {
  return (
    <HeaderButton type={"notification"}>
      <AiOutlineBell />
    </HeaderButton>
  );
};

export default NotificationButton;
