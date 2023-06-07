import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  type: string;
};

export const Loader: FC<Props> = ({ type }) => {
  const style: string =
    type === "loading_page" ? "loading_page" : "loading_simple";

  return (
    <div className={[styles[style], styles.container].join(" ")}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
