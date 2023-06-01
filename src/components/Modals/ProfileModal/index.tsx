import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import styles from "./index.module.scss";
import { signIn, useSession } from "next-auth/react";
import AuthSteps from "./Steps/AuthSteps.tsx";
import AuthResult from "./Steps/AuthResult";

type ProfileModalProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const ProfileModal: FC<ProfileModalProps> = ({ openModal, setOpenModal }) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [inputData, setInputData] = useState("");
  const { data: session } = useSession();

  const authorization = async () => {
    console.log("login", login, "password", password);
    const payload = { username: `${login}`, password: `${password}` };
    const res = await signIn("credentials", {
      ...payload,
      redirect: false,
    });
    console.log(res);
  };

  const googleInputHandler = () => {
    setOpenModal(false);
    signIn("google");
  };

  const vkInputHandler = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (step === 1) {
      setLogin(inputData);
    } else if (step === 2) {
      setPassword(inputData);
    }
  }, [step]);

  useEffect(() => {
    if (login.length !== 0 && password.length !== 0) {
      authorization();
    }
  }, [login, password]);

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
            className={styles.bar__line}
            style={{ width: `calc(33.33% * ${step})` }}
          ></div>
        </div>
      </div>
      {step < 2 && (
        <AuthSteps
          step={step}
          setStep={setStep}
          inputData={inputData}
          setInputData={setInputData}
        />
      )}
      {session?.user.name && (
        <AuthResult openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default ProfileModal;
