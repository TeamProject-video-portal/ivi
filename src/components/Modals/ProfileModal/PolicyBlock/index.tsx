import { FC, Dispatch, SetStateAction, useRef, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

const CompanyPolicy: FC = () => {
  return (
    <div className={styles.continue_policy}>
      <div>Нажимая «Продолжить», я соглашаюсь</div>
      <div>
        с{" "}
        <Link href={"https://www.ivi.ru/info/confidential"}>
          Политикой конфиденциальности
        </Link>
      </div>
      <div>
        и{" "}
        <Link href={"https://www.ivi.ru/info/agreement"}>
          Пользовательским соглашением
        </Link>
      </div>
    </div>
  );
};

export default CompanyPolicy;
