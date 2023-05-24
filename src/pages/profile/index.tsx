import { useState, FC } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import presentImage from "../../images/profileImages/present.png";
import paymentImage from "../../images/profileImages/payment.svg";
import favoriteImage from "../../images/profileImages/favorite.svg";
import historyImage from "../../images/profileImages/history.svg";
import cardImage from "../../images/profileImages/card.svg";
import codeImage from "../../images/profileImages/code.svg";
import settingsImage from "../../images/profileImages/settings.svg";
import supportImage from "../../images/profileImages/support.svg";
import { TbVectorTriangle, TbBellRinging } from "react-icons/tb";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import ProfileModal from "@/components/ProfileModal";
import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { TiPencil } from "react-icons/ti";
import { MdOutlineLogout } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";

const Profile: NextPage = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
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
                <div className={styles.userName}>qwerty</div>
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
          <div className={styles.topBtnRow}>
            <Link href={"https://www.ivi.ru/profile/subscriptions"} className={styles.subscribeBtn}>
              <Button color="purple" type="profileSertButton">
                <div>{t("profile.subscribes")}</div>
                <div>{t("profile.go_connection")}</div>
              </Button>
            </Link>
            <Link href={"https://www.ivi.ru/profile"} className={styles.sertBtn}>
              <Button color="purple" type="profileSertButton">
                <div>{t("profile.certificates")}</div>
                <div>{t("profile.activate")}</div>
              </Button>
            </Link>
            <Button color="purple" type="profileSertButton" className={styles.accountBtn}>
              <div>{t("profile.account")}</div>
              <div>0 ₽</div>
            </Button>
          </div>
          <div className={styles.subscribePresentBtn}>
            <Link href={"https://widget.mgc-loyalty.ru/iviru/landing"}>
              <Button type="profilePresentButton">
                <Image src={presentImage} alt="presentButton" priority></Image>
                <div>{t("profile.give_subscription")}</div>
              </Button>
            </Link>
          </div>
          <div className={styles.inviteBtnRow}>
            <Link href={"https://www.ivi.ru/profile/referral"}>
              <Button type="profileInviteButton" color="purple">
                <div>
                  <TbVectorTriangle />
                </div>
                <div>{t("profile.invite")}</div>
              </Button>
            </Link>
            <Link href={"https://www.ivi.ru/profile/pull_notifications"}>
              <Button type="profileInviteButton" color="purple">
                <div>
                  <TbBellRinging />
                </div>
                <div>{t("profile.notifications")}</div>
              </Button>
            </Link>
          </div>
          <div className={styles.bottomBtnRow}>
            <Link href={"https://www.ivi.ru/profile/purchases"}>
              <Button color="purple" type="profileMenuButton">
                <Image src={paymentImage} alt="payment"></Image>
                <div>{t("profile.purchases")}</div>
              </Button>
            </Link>
            <Link href={"https://www.ivi.ru/profile/favorites"}>
              <Button color="purple" type="profileMenuButton">
                <Image src={favoriteImage} alt="favorite"></Image>
                <div>{t("profile.watch_later")}</div>
              </Button>
            </Link>
            <Link href={"https://www.ivi.ru/profile/watched"}>
              <Button color="purple" type="profileMenuButton">
                <Image src={historyImage} alt="history"></Image>
                <div>{t("profile.views")}</div>
              </Button>
            </Link>
            <Link href={"https://www.ivi.ru/profile/cards"}>
              <Button color="purple" type="profileMenuButton">
                <Image src={cardImage} alt="card"></Image>
                <div>{t("profile.payment")}</div>
              </Button>
            </Link>
            <Link href={"https://www.ivi.ru/profile"}>
              <Button color="purple" type="profileMenuButton">
                <Image src={codeImage} alt="code"></Image>
                <div>{t("profile.login_by_code")}</div>
              </Button>
            </Link>
            <Link href={"https://www.ivi.ru/profile/settings"}>
              <Button color="purple" type="profileMenuButton">
                <Image src={settingsImage} alt="settings"></Image>
                <div>{t("profile.settings")}</div>
              </Button>
            </Link>
            <Link
              href={
                "https://ask.ivi.ru/?_gl=1*1gchsbl*_ga*MjcwMjg3NzUzLjE2ODM1MjkwODI.*_ga_GETQ4387MJ*MTY4MzY4OTYyMC4zLjEuMTY4MzcxMzk5OS4xMC4wLjA."
              }
            >
              <Button color="purple" type="profileMenuButton">
                <Image src={supportImage} alt="support"></Image>
                <div>{t("profile.help")}</div>
              </Button>
            </Link>
          </div>
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
