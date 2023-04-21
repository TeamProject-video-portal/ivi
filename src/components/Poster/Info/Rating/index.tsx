import { FC, useState } from "react";
import styles from "./index.module.scss";
const Rating: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rating}>
        <h5>
          7,<span>4</span>
        </h5>
      </div>
      {/* <div>
        <p>сюжет</p>
      </div> */}
    </div>
  );
};

export default Rating;
