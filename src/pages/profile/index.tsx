import { useState, FC, useEffect } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "next-export-i18n";
import { GetServerSidePropsContext, NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { TiPencil } from "react-icons/ti";
import { MdOutlineLogout } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]";
import { ButtonsProfile } from "@/components/ButtonsProfile";
import UserName from "./UserName";
import LogOut from "./LogOut";
import ProfileModal from "@/components/Modals/ProfileModal";

const Profile = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session?.user.name) {
      setOpenModal(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Мой профиль</title>
      </Head>
      {!openModal ? (
        <div className={styles.profile}>
          {session?.user.name ? (
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
          <LogOut />
        </div>
      ) : (
        <ProfileModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Profile;
