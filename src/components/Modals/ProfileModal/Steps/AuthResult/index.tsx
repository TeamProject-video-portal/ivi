import { FC, Dispatch, SetStateAction, useRef, useState } from "react";
import Link from "next/link";
import styles from "../index.module.scss";
import { Button } from "@/components/Button/Button";
import CompanyPolicy from "../../PolicyBlock";

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
const AuthResult: FC<Props> = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.message}>
        <div className={styles.subtitle}>
          Вы успешно авторизованы
          {/* : "Ошибка: логин или пароль введены  неправильно"*/}
        </div>
      </div>
      <div className={styles.enter_data}>
        <div className={styles.continue}>
          <Button
            className={`${styles.continue__btn} ${styles.activeContinue} `}
            color="pink"
            onClick={() => props.setOpenModal(false)}
          >
            Продолжить
          </Button>
        </div>
        <CompanyPolicy />
      </div>
    </div>
  );
};

export default AuthResult;
