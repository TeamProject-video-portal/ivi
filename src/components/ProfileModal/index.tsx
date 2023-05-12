import { FC, Dispatch, SetStateAction, useRef, useState } from 'react';
import Link from 'next/link';
import styles from "./index.module.scss"
import { Button } from '../Button/Button';

type ProfileModalProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ProfileModal: FC<ProfileModalProps> = ({ openModal, setOpenModal }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [auth, setAuth] = useState<boolean>(false);

  const onFocusHandler = () => {
    inputRef.current?.focus();
    labelRef.current?.classList.add(`${styles.active}`);
  };

  const onBlurHandler = () => {
    if (!(login || password)) labelRef.current?.classList.remove(`${styles.active}`);
  };

  const onClickHandler = () => {
    switch (step) {
      case 1:
        setStep(step => step + 1);
        labelRef.current?.classList.remove(`${styles.active}`);
        break;
      case 2:
        setStep(step => step + 1);
        break;
      default:
        if (auth) {
          setOpenModal(false)
        } else {
          setStep(1);
          setPassword('');
          if (login) labelRef.current?.classList.add(`${styles.active}`);
        }
    }
  }

  return (
    <div className={`${styles.profileModal} ${openModal && styles.profileModal_open
      }`} >
      <div className={styles.headerRow} >
        <h1 className={styles.title}>Вход или регистрация</h1>
        <button className={styles.closeBtn} onClick={() => setOpenModal(false)}>
          <div className="nbl-icon nbl-icon_close_20 nbl-simpleControlButton__nbl-icon"></div>
        </button>
        <div className={styles.bar}>
          <div className={styles.bar__line} style={{ width: `calc(33.33% * ${step})` }}></div >
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.message}>
          <div className={styles.message__subtitle}>
            {step === 1 && 'Войдите или зарегистрируйтесь'}
            {step === 2 && 'Введите пароль для регистрации или авторизации'}
            {step === 3 && (auth ? 'Вы успешно авторизованы' : 'Ошибка: логин или пароль введены неправильно')}
          </div>
          <div>
            {step === 1 && 'чтобы пользоваться сервисом на любом устройстве'}
            {step === 2 && 'не менее 6 символов'}
          </div>
        </div>
        <div className={styles.loginInput} onFocus={onFocusHandler} onBlur={onBlurHandler}>
          <div className={`nbl - icon nbl - icon_avatar_16 ${styles.loginInput__icon} `}></div>
          <div className={`${styles.loginInput__label} `} ref={labelRef} onClick={onFocusHandler}>
            {step === 1 && 'Через email или телефон'}
            {step === 2 && 'пароль'}
          </div>
          {step === 1 && (
            <input
              className={styles.loginInput__input}
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              type='text'
              ref={inputRef}
            />
          )}
          {step === 2 && (
            <input
              className={styles.loginInput__input}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              ref={inputRef}
            />
          )}
        </div>
        <div className={styles.continue}>
          <Button
            className={`${styles.continue__btn} ${((login && step === 1) || (password && step === 2) || step === 3) && styles.activeContinue} `}
            color="pink"
            onClick={onClickHandler}
            disabled={(!login && step === 1) || (!password && step === 2)}
          >
            Продолжить
          </Button>
          {step === 1 && (
            <div className={styles.continue__policy}>
              <div>Нажимая «Продолжить», я соглашаюсь</div>
              <div>с <Link href={'https://www.ivi.ru/info/confidential'}>Политикой конфиденциальности</Link></div>
              <div>и <Link href={'https://www.ivi.ru/info/agreement'}>Пользовательским соглашением</Link></div>
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default ProfileModal;