import { FC } from "react";
import styles from "./index.module.scss";
import { useSession } from "next-auth/react";

type Props = {
  name: string;
};
export const AuthProfile: FC<Props> = ({ name }) => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <p className={styles.name}> {name}</p>
      {/* {session?.user.userRole === "admin" && (
        <span className={styles.role}>admin</span>
      )} */}
    </div>
  );
};
