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

  const onFocusHandler = () => {
    inputRef.current?.focus();
    labelRef.current?.classList.add(`${styles.active}`);
  };

  const onBlurHandler = () => {
    if (!login) labelRef.current?.classList.remove(`${styles.active}`);
  };

  return (
    <div className={`${styles.profileModal} ${openModal && styles.profileModal_open}`} >
      <div className={styles.headerRow} >
        <h1 className={styles.title}>Вход или регистрация</h1>
        <button className={styles.closeBtn} onClick={() => setOpenModal(false)}>
          <div className="nbl-icon nbl-icon_close_20 nbl-simpleControlButton__nbl-icon"></div>
        </button>
        <div className={styles.bar}>
          <div className={styles.bar__progress}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.message}>
          <div className={styles.message__subtitle}>Войдите или зарегистрируйтесь</div>
          <div>чтобы пользоваться сервисом на любом устройстве</div>
        </div>
        <div className={styles.loginInput} onFocus={onFocusHandler} onBlur={onBlurHandler}>
          <div className={`nbl-icon nbl-icon_avatar_16 ${styles.loginInput__icon}`}></div>
          <div className={`${styles.loginInput__label}`} ref={labelRef} onClick={onFocusHandler}>
            Через email или телефон
          </div>
          <input
            className={styles.loginInput__input}
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            type="text"
            ref={inputRef}
          />
        </div>
        <div className={styles.continue}>
          <Button className={styles.continue__btn} color="pink">
            Продолжить
          </Button>
          <div className={styles.continue__policy}>
            <div>Нажимая «Продолжить», я соглашаюсь</div>
            <div>с <Link href={'https://www.ivi.ru/info/confidential'}>Политикой конфиденциальности</Link></div>
            <div>и <Link href={'https://www.ivi.ru/info/agreement'}>Пользовательским соглашением</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;