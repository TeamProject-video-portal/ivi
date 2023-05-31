import { useState, FC, useEffect } from "react";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "next-export-i18n";
import { useSession, signIn, signOut } from "next-auth/react";
import { MdOutlineLogout } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";

const LogOut = () => {
  const { t } = useTranslation();
  const { data: session, status } = useSession();

  return (
    <>
      {session?.user.name && (
        <div className={styles.logOutRow}>
          <button>
            <FaExchangeAlt />
            <div>Сменить пароль</div>
          </button>
          <button onClick={() => signOut()}>
            <MdOutlineLogout />
            <div>Выйти</div>
          </button>
        </div>
      )}
    </>
  );
};

export default LogOut;
