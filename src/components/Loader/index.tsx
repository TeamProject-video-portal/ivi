import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  className: string;
};

export const Loader: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
