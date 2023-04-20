import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const Poster: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.poster}></div>
      <p className={styles.name}>Name</p>
      <span>Free</span>
    </div>
  );
};

export default Poster;
