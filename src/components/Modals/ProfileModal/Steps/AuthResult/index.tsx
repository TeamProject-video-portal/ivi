import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import styles from "../index.module.scss";
import { Button } from "@/components/Button/Button";
import CompanyPolicy from "../../PolicyBlock";
import { SignInResponse } from "next-auth/react";

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  result: SignInResponse | undefined;
  isRegistration: boolean;
  setIsRegistration: Dispatch<SetStateAction<boolean>>;
  isAuthorization: boolean;
  setIsAuthorization: Dispatch<SetStateAction<boolean>>;
  isNewAccout: boolean;
};
const AuthResult: FC<Props> = (props) => {
  const [title, setTitle] = useState<string>();
  const authHandleClick = () => {
    props.setOpenModal(false);
    props.setIsRegistration(false);
  };

  useEffect(() => {
    console.log(props.result);
    if (props.result?.ok) {
      setTitle("Вы успешно авторизованы");
    } else if (!props.result?.ok && props.isNewAccout) {
      setTitle("Вы успешно зарегистрированы");
    } else if (!props.result?.ok) {
      setTitle("Логин или пароль введены  неправильно");
    }
  }, [props.result]);

  return (
    <div className={styles.content}>
      <div className={styles.message}>
        <div className={styles.subtitle}>{title}</div>
      </div>
      <div className={styles.enter_data}>
        <div className={styles.continue}>
          {props.result?.ok || props.isNewAccout ? (
            <Button
              className={`${styles.continue_btn} ${styles.activeContinue} `}
              color="pink"
              onClick={authHandleClick}
            >
              Продолжить
            </Button>
          ) : (
            <div>
              <Button
                className={`${styles.continue_btn} ${styles.activeContinue} `}
                color="pink"
                onClick={() => props.setIsRegistration(true)}
              >
                Зарегистрироваться
              </Button>
              <Button
                className={`${styles.continue_btn} ${styles.activeContinue} `}
                color="pink"
                onClick={() => props.setIsAuthorization(true)}
              >
                Войти
              </Button>
            </div>
          )}
        </div>
        <CompanyPolicy />
      </div>
    </div>
  );
};

export default AuthResult;
