import { FC } from "react";
import styles from "./index.module.scss";
import { useSession } from "next-auth/react";

export const AuthProfile: FC = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <p className={styles.name}> {session?.user.name}</p>
      {session?.user.userRole === "admin" && (
        <span className={styles.role}>admin</span>
      )}
    </div>
  );
};
