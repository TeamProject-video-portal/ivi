import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import styles from "../index.module.scss";
import { Button } from "@/components/Button/Button";
import CompanyPolicy from "../../PolicyBlock";
import { SignInResponse } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/Redux/auth/selectors";
import { useTranslation } from "next-export-i18n";
import { selectRegistrUser } from "@/Redux/registration/selectors";
import { Loader } from "@/components/Loader";

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  isRegistration: boolean;
  setIsRegistration: Dispatch<SetStateAction<boolean>>;
  isAuthorization: boolean;
  setIsAuthorization: Dispatch<SetStateAction<boolean>>;
  isNewAccout: boolean;
};
const AuthResult: FC<Props> = (props) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [emailUser, setEmailUser] = useState<string | null>();
  const [nicknameUser, setNicknameUser] = useState<string | null>();
  const resAuth = useSelector(selectAuthUser);
  const resRegistr = useSelector(selectRegistrUser);

  const authHandleClick = () => {
    props.setOpenModal(false);
    props.setIsRegistration(false);
  };

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
    setNicknameUser(localStorage.getItem("nickname"));
    setTitle("");
  }, []);

  useEffect(() => {
    if (props.isNewAccout === false && localStorage.getItem("idUser")) {
      setTitle("profile.success_auth");
      setNicknameUser(localStorage.getItem("nickname"));
      setEmailUser(localStorage.getItem("email"));
    } else if (
      props.isNewAccout &&
      props.isRegistration &&
      localStorage.getItem("idUser")
    ) {
      setTitle("profile.success_regist");
      setNicknameUser(localStorage.getItem("nickname"));
      setEmailUser(localStorage.getItem("email"));
    } else if (
      localStorage.getItem("email") === "" &&
      localStorage.getItem("nickname") === ""
    ) {
      setTitle("profile.error_auth");
    }
  }, [resAuth, resRegistr]);

  useEffect(() => {
    if (props.openModal === false) {
      setTitle("");
    }
  }, [props.openModal]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader type={"loader_page"} />;
  }

  return (
    <div className={styles.content}>
      <div className={styles.message}>
        <div className={styles.subtitle}>{t(title)}</div>
      </div>

      <div className={styles.enter_data}>
        <div className={styles.continue}>
          {localStorage.getItem("idUser") ? (
            <Button
              className={`${styles.continue_btn} ${styles.activeContinue} `}
              color="pink"
              onClick={authHandleClick}
            >
              {t("buttons.continue")}
            </Button>
          ) : (
            <div>
              <Button
                className={`${styles.continue_btn} ${styles.activeContinue} `}
                color="pink"
                onClick={() => props.setIsRegistration(true)}
              >
                {t("buttons.register")}
              </Button>
              <Button
                className={`${styles.continue_btn} ${styles.activeContinue} `}
                color="pink"
                onClick={() => props.setIsAuthorization(true)}
              >
                {t("buttons.enter")}
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
