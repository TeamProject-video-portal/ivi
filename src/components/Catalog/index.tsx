import React, { FC } from "react";
import styles from "./index.module.scss";
import Carousel from "../Carousel";

const Catalog: FC = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Сериалы-новинки</h4>
      <Carousel />
    </div>
  );
};
export default Catalog;
