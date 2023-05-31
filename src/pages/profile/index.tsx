import { useState, FC, useEffect } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "next-export-i18n";
import ProfileModal from "@/components/ProfileModal";
import { GetServerSidePropsContext, NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { TiPencil } from "react-icons/ti";
import { MdOutlineLogout } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]";
import { ButtonsProfile } from "@/components/ButtonsProfile";
const Profile = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      setOpenModal(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Мой профиль</title>
      </Head>
      {!openModal ? (
        <div className={styles.profile}>
          {session ? (
            <UserName name={session.user.name} email={session.user.email} />
          ) : (
            <Button
              type="loginButton"
              color="pink"
              className={styles.loginBtn}
              onClick={() => setOpenModal(true)}
            >
              <div className="nbl-icon nbl-icon_avatar_16 nbl-button__nbl-icon"></div>
              {t("buttons.enter_register")}
            </Button>
          )}

          <ButtonsProfile />

          {status === "authenticated" && (
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
        </div>
      ) : (
        <ProfileModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Profile;
