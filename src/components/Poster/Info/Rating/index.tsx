import { FC, useState } from "react";
import styles from "./index.module.scss";
import ProgressBar from "./ProgressBar";
const Rating: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rating}>
        <h5>
          7,<span>4</span>
        </h5>
        <div className={styles.div_progress_bar}>
          <ProgressBar progress={40} style={"small"} />
          <ProgressBar progress={50} style={"small"} />
          <ProgressBar progress={80} style={"small"} />
          <ProgressBar progress={10} style={"small"} />
        </div>
      </div>
      <div className={styles.story}>
        <p>сюжет</p>
        <ProgressBar progress={80} style={"big"} />
      </div>

      <div className={styles.info}>
        <p>2001-2022, Россия, Комедия</p>
        <p>5 сезонов</p>
      </div>
    </div>
  );
};

export default Rating;
