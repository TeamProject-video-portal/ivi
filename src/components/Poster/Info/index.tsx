import { FC, useState } from "react";
import Icons from "./Icons";
import styles from "./index.module.scss";
import Rating from "./Rating";
const Info: FC = () => {
  return (
    <div className={styles.container}>
      <Icons />
      <Rating />
    </div>
  );
};

export default Info;
