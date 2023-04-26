import { FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss"
import { Button } from "../Button/Button";

const Suggestion: FC = () => {

  return (
    <div className={styles.suggestion}>
      <Button color="darkbluegrey" className={styles.button}>
        2022 год
      </Button>
    </div >
  );
};

export default Suggestion;