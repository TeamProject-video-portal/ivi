import { FC, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";

export const RightButtons: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [locale, setLocale] = useState<any>("ru");
  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  return (
    <div className={styles.right_buttons}>
      <Link href={`/profile?=lang=${locale}`}>
        <button className={styles.button_watch}>
          {t("buttons.enter_or_regist")}
        </button>
      </Link>
      <div className={styles.bottom_buttons}>
        <button className={styles.sub_button}>{t("profile.settings")}</button>
        <button className={styles.sub_button}>{t("profile.help")}</button>
      </div>
    </div>
  );
};
