import { useState, FC } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { TbVectorTriangle, TbBellRinging } from "react-icons/tb";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
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

  return (
    <>
      <Head>
        <title>Мой профиль</title>
      </Head>
      {!openModal ? (
        <div className={styles.profile}>
          {status === "authenticated" ? (
            <div className={styles.loginRow}>
              <div>
                <div className={styles.userName}>{session.user.name}</div>
                <p>{session.user.email}</p>
                <div className={styles.userEmail}>
                  <div className="nbl-icon nbl-icon_email_16"></div>
                  <div>qwerty@gmail.com</div>
                </div>
              </div>
              <Button type="editLoginButton" color="purple">
                <TiPencil />
                {t("buttons.edit_profile")}
              </Button>
            </div>
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
