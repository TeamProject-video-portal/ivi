import {
  FC,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import Link from "next/link";
import styles from "../index.module.scss";
import { Button } from "@/components/Button/Button";
import CompanyPolicy from "../../PolicyBlock";

type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  content: Record<number, string[]>;
  inputData: string;
  setInputData: Dispatch<SetStateAction<string>>;
};

const AuthSteps: FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState(props.inputData);

  const onFocusHandler = () => {
    inputRef.current?.focus();
    labelRef.current?.classList.add(`${styles.active}`);
  };

  const onBlurHandler = () => {
    labelRef.current?.classList.remove(`${styles.active}`);
  };

  // const contentObj: Record<number, string[]> = {
  //   0: ["Войдите или зарегистрируйтесь", "Через email"],
  //   1: ["Введите пароль для регистрации или авторизации", "Пароль"],
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.length !== 0) {
      props.setStep(props.step + 1);

      props.setInputData(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.message}>
        <div className={styles.subtitle}>{props.content[props.step][0]}</div>
        <span>не менее 6 символов</span>
      </div>
      <div className={styles.enter_data}>
        <div
          className={styles.input_div}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        >
          {/* <div className={styles.label} ref={labelRef} onClick={onFocusHandler}>
            {props.content[props.step][1]}
          </div> */}
          <input
            className={styles.enter_login}
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => handleChange(e)}
            placeholder={props.content[props.step][1]}
          />
        </div>
        <div className={styles.continue}>
          <Button
            className={`${styles.continue_btn} ${styles.activeContinue} `}
            color="pink"
            onClick={handleClick}
          >
            Продолжить
          </Button>
        </div>
        <CompanyPolicy />
      </div>
    </div>
  );
};

export default AuthSteps;
