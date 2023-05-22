import { FC } from "react";
import styles from "./index.module.scss"

const ErrorPage: FC = () => {
  return (
    <h1 className={styles.errorPage}>Ошибка</h1>
  );
};

export default ErrorPage;