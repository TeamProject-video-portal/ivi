import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import styles from "./index.module.scss";
import { signIn, SignInResponse, useSession } from "next-auth/react";
import AuthSteps from "./Steps/AuthSteps.tsx";
import AuthResult from "./Steps/AuthResult";
import { CSSTransition } from "react-transition-group";

type ProfileModalProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export type DataUser = {
  nickName: string;
  login: string;
  password: string;
};

const contentAuth: Record<number, string[]> = {
  0: ["Войдите или зарегистрируйтесь", "Через email"],
  1: ["Введите пароль для регистрации или авторизации", "Пароль"],
};

const contentRegistraion: Record<number, string[]> = {
  0: ["Введите почту ", "Почта"],
  1: ["Введите никнейм", "Никнейм"],
  2: ["Введите пароль ", "Пароль"],
};

const ProfileModal: FC<ProfileModalProps> = ({ openModal, setOpenModal }) => {
  const [step, setStep] = useState<number>(0);
  const [inputData, setInputData] = useState("");
  const { data: session } = useSession();
  const [result, setResult] = useState<SignInResponse | undefined>();
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const [isAuthorization, setIsAuthorization] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<DataUser>({
    nickName: "",
    login: "",
    password: "",
  });
  const [endStep, setEndStep] = useState(2);
  const [enterData, setEnterData] = useState(contentAuth);
  const [isNewAccout, setIsNewAccout] = useState(false);

  //авторизация пользователя
  const authorization = async () => {
    const payload = {
      email: `${dataUser.login}`,
      password: `${dataUser.password}`,
    };
    const res = await signIn("credentials", {
      ...payload,
      redirect: false,
    });
    setResult(res);
  };

  const registration = () => {
    setIsNewAccout(true);
  };

  useEffect(() => {
    if (isAuthorization) {
      setIsRegistration(false);
      setStep(0);
    }
    console.log(isAuthorization);
  }, [isAuthorization]);

  //запись введенных данных
  useEffect(() => {
    if (!isRegistration) {
      if (step === 1) {
        setDataUser({ nickName: "", login: inputData, password: "" });
        setInputData("");
      } else if (step === 2) {
        setDataUser({
          nickName: "",
          login: dataUser?.login,
          password: inputData,
        });
        setInputData("");
        setIsAuthorization(false);
      }
    } else {
      if (step === 1) {
        setDataUser({ nickName: "", login: inputData, password: "" });
      } else if (step === 2) {
        setDataUser({
          nickName: inputData,
          login: dataUser?.login,
          password: "",
        });
      } else if (step === 3) {
        setDataUser({
          nickName: dataUser.nickName,
          login: dataUser?.login,
          password: inputData,
        });
      }
    }
  }, [step]);

  useEffect(() => {
    if (dataUser.nickName === "" && dataUser.password !== "") {
      authorization();
    } else if (
      dataUser.nickName !== "" &&
      dataUser.login !== "" &&
      dataUser.password !== ""
    ) {
      ////////////////////////
      //запрос на регистрацию
      /////////////////
      authorization();
      registration();
      console.log("need registration");
    }
  }, [dataUser]);

  //при регистрации введенные ранее данные обнуляются и последующие поля отображаются с другими данными для ввода
  useEffect(() => {
    if (isRegistration) {
      setDataUser({
        nickName: "",
        login: "",
        password: "",
      });
      setStep(0);
      setEndStep(3);
      setEnterData(contentRegistraion);
    }
  }, [isRegistration]);

  return (
    <div
      className={`${styles.profileModal} ${
        openModal && styles.profileModal_open
      }`}
    >
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Вход или регистрация</h1>
        <button className={styles.closeBtn} onClick={() => setOpenModal(false)}>
          <div className="nbl-icon nbl-icon_close_20 nbl-simpleControlButton__nbl-icon"></div>
        </button>
        <div className={styles.bar}>
          <div
            className={styles.bar_line}
            style={{ width: `calc(33.33% * ${step})` }}
          ></div>
        </div>
      </div>

      {step < endStep && (
        <AuthSteps
          step={step}
          setStep={setStep}
          inputData={inputData}
          setInputData={setInputData}
          content={enterData}
        />
      )}
      {step === endStep && (
        <AuthResult
          openModal={openModal}
          setOpenModal={setOpenModal}
          result={result}
          isRegistration={isRegistration}
          setIsRegistration={setIsRegistration}
          isAuthorization={isAuthorization}
          setIsAuthorization={setIsAuthorization}
          isNewAccout={isNewAccout}
        />
      )}
    </div>
  );
};

export default ProfileModal;
