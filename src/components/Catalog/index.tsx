import React, { FC } from "react";
import styles from "./index.module.scss";
import "swiper/swiper-bundle.css";
import CustomSwiper from "./CustomSwiper";

const Catalog: FC = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Сериалы-новинки</h4>
      <CustomSwiper />
    </div>
  );
};
export default Catalog;
