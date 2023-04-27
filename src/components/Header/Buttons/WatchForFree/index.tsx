import { FC } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { en } from "@/locales/en";
import { ru } from "@/locales/ru";

const WatchingButton: FC = () => {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div>
      <button className={styles.button_watch_for_free}>
        {t.buttons.watch}
      </button>
    </div>
  );
};

export default WatchingButton;
