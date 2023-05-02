import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  img: string;
  name: string;
};
export const Actors: FC<Props> = (props) => {
  return (
    <div className={styles.actor_cart}>
      <div className={styles.image}>
        <img src={props.img} alt="" />
      </div>
      <p className={styles.name}>{props.name}</p>
    </div>
  );
};
