import { FC } from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import Image, { StaticImageData } from "next/image";

export type CartProps = {
  title: { ruName: string; enName: string };
  text: string;
  type: string;
  img: string;
};

const progress = 80;
const CardMovie: FC<CartProps> = (props) => {
  const MainClassNames = `container_${props.type}`;

  return (
    <div className={styles[MainClassNames]}>
      <div className={styles.banner}>
        <Image src={props.img} width={900} height={500} alt=""></Image>
        {props.type === "summary" && (
          <div className={styles.profile_time}>
            <div className={styles.time}>
              {" "}
              <p>еще 6 мин</p>
            </div>
            <div className={styles.progress}>
              <div
                style={{ width: `${progress}%` }}
                className={styles.active}
              ></div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.decription}>
        <h5 className={styles.title}>{props.title?.ruName}</h5>
        {props.type === "detailed" ? (
          <div>
            <p className={styles.text}>
              {" "}
              {props.text.length > 200
                ? props.text.slice(0, 170) + "..."
                : props.text}
            </p>
            <p className={styles.text}>6 мин</p>
          </div>
        ) : (
          <div>
            <p className={styles.text}>{props.text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardMovie;
